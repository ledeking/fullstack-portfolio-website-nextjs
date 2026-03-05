"use server";

import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { Resend } from "resend";

const contactFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitContactForm(formData: z.infer<typeof contactFormSchema>) {
  try {
    // Validate input
    const validatedData = contactFormSchema.parse(formData);

    // Save to database
    await prisma.contactSubmission.create({
      data: validatedData,
    });

    // Send email if Resend API key is configured
    if (process.env.RESEND_API_KEY && process.env.CONTACT_EMAIL) {
      try {
        await resend.emails.send({
          from: process.env.FROM_EMAIL || "noreply@yourdomain.com",
          to: process.env.CONTACT_EMAIL,
          subject: `New Contact Form Submission from ${validatedData.name}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${validatedData.name}</p>
            <p><strong>Email:</strong> ${validatedData.email}</p>
            <p><strong>Message:</strong></p>
            <p>${validatedData.message.replace(/\n/g, "<br>")}</p>
          `,
        });
      } catch (emailError) {
        // Log email error but don't fail the request
        console.error("Failed to send email:", emailError);
      }
    }

    return { success: true };
  } catch (error) {
    console.error("Contact form error:", error);
    
    if (error instanceof z.ZodError) {
      return {
        success: false,
        error: "Invalid form data. Please check your inputs.",
      };
    }

    return {
      success: false,
      error: "Failed to submit form. Please try again later.",
    };
  }
}
