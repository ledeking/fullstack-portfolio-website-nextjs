import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, Calendar, GraduationCap, Briefcase, Heart } from "lucide-react";
import Link from "next/link";
import { Timeline } from "@/components/sections/timeline";

export const metadata = {
  title: "About",
  description: "Learn more about my background, experience, and journey as a fullstack engineer",
};

const experience = [
  {
    year: "2023 - Present",
    title: "Senior Fullstack Engineer",
    company: "Tech Company",
    description: "Leading development of scalable web applications using React, Next.js, and Node.js. Mentoring junior developers and implementing best practices.",
  },
  {
    year: "2021 - 2023",
    title: "Fullstack Developer",
    company: "Startup Inc",
    description: "Built and maintained multiple client-facing applications. Collaborated with cross-functional teams to deliver high-quality products.",
  },
  {
    year: "2019 - 2021",
    title: "Frontend Developer",
    company: "Digital Agency",
    description: "Developed responsive web applications and collaborated with designers to implement pixel-perfect UIs.",
  },
];

const education = [
  {
    year: "2015 - 2019",
    title: "Bachelor of Science in Computer Science",
    institution: "University Name",
    description: "Focused on software engineering, algorithms, and web technologies.",
  },
];

const hobbies = [
  "Open Source Contributions",
  "Reading Tech Blogs",
  "Photography",
  "Hiking",
  "Gaming",
];

export default function AboutPage() {
  return (
    <div className="container px-4 py-12 md:py-24">
      <div className="mx-auto max-w-4xl">
        {/* Bio Section */}
        <section className="mb-16">
          <h1 className="text-4xl font-bold mb-6">About Me</h1>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg text-muted-foreground mb-4">
              I'm a passionate fullstack engineer with over 5 years of experience building
              modern web applications. I specialize in React, Next.js, Node.js, and cloud
              technologies, with a strong focus on creating scalable, maintainable, and
              user-friendly solutions.
            </p>
            <p className="text-lg text-muted-foreground mb-4">
              My journey in software development started during my university years, and
              I've been continuously learning and adapting to new technologies ever since.
              I believe in writing clean code, following best practices, and always putting
              the user experience first.
            </p>
            <p className="text-lg text-muted-foreground">
              When I'm not coding, you can find me contributing to open source projects,
              reading about the latest tech trends, or exploring the outdoors with my camera.
            </p>
          </div>
        </section>

        {/* Experience Timeline */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
            <Briefcase className="h-8 w-8" />
            Experience
          </h2>
          <Timeline items={experience} />
        </section>

        {/* Education */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
            <GraduationCap className="h-8 w-8" />
            Education
          </h2>
          <Timeline items={education} />
        </section>

        {/* Hobbies & Interests */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
            <Heart className="h-8 w-8" />
            Hobbies & Interests
          </h2>
          <div className="flex flex-wrap gap-3">
            {hobbies.map((hobby) => (
              <Card key={hobby} className="flex-1 min-w-[150px]">
                <CardContent className="pt-6">
                  <p className="text-center font-medium">{hobby}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Resume Download */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle>Resume</CardTitle>
              <CardDescription>
                Download my resume to learn more about my skills and experience
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild>
                <Link href="/resume.pdf" download>
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume (PDF)
                </Link>
              </Button>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
