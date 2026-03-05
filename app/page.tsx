import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Code, Database, Globe, Mail } from "lucide-react";
import { prisma } from "@/lib/prisma";
import { ProjectCard } from "@/components/sections/project-card";
import { SkillsBadge } from "@/components/sections/skills-badge";

export const metadata = {
  title: "Home",
  description: "Welcome to my portfolio - Senior Fullstack Engineer",
};

export default async function HomePage() {
  // Fetch featured projects
  const featuredProjects = await prisma.project.findMany({
    where: { featured: true },
    take: 3,
    orderBy: { createdAt: "desc" },
  });

  // Fetch skills
  const skills = await prisma.skill.findMany({
    take: 12,
    orderBy: { proficiency: "desc" },
  });

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="container px-4 py-24 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl">
            Fullstack Engineer
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground sm:text-xl">
            Building modern web applications with React, Next.js, and Node.js.
            Passionate about clean code, user experience, and scalable architecture.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/contact">
                Hire Me
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/projects">View Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Badges */}
      <section className="container px-4 py-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-8">Technologies I Work With</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill) => (
              <SkillsBadge key={skill.id} skill={skill} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="outline">
              <Link href="/skills">View All Skills</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="container px-4 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
            <p className="text-muted-foreground">
              A selection of my recent work showcasing fullstack capabilities
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link href="/projects">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container px-4 py-24">
        <div className="mx-auto max-w-4xl">
          <Card className="border-2">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl">Let's Work Together</CardTitle>
              <CardDescription className="text-lg">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact">
                  <Mail className="mr-2 h-4 w-4" />
                  Get In Touch
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/about">Learn More About Me</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
