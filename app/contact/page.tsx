import { ContactForm } from "@/components/sections/contact-form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";

export const metadata = {
  title: "Contact",
  description: "Get in touch with me for project inquiries, collaborations, or just to say hello",
};

export default function ContactPage() {
  return (
    <div className="container px-4 py-12 md:py-24">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Get In Touch</h1>
          <p className="text-lg text-muted-foreground">
            Have a project in mind or want to collaborate? I'd love to hear from you.
            Fill out the form below or reach out through one of my social channels.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  Email
                </CardTitle>
                <CardDescription>
                  Send me an email and I'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <a
                  href="mailto:your-email@example.com"
                  className="text-primary hover:underline"
                >
                  your-email@example.com
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Location
                </CardTitle>
                <CardDescription>
                  Based in a city near you, open to remote opportunities worldwide.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Available for remote work</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Response Time
                </CardTitle>
                <CardDescription>
                  I typically respond within 24-48 hours.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
