import { prisma } from "@/lib/prisma";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export const metadata = {
  title: "Skills",
  description: "My technical skills and proficiency levels across different technologies",
};

const skillCategories = [
  { name: "Frontend", value: "frontend" },
  { name: "Backend", value: "backend" },
  { name: "Tools & Others", value: "tools" },
];

export default async function SkillsPage() {
  const allSkills = await prisma.skill.findMany({
    orderBy: { proficiency: "desc" },
  });

  const skillsByCategory = skillCategories.map((category) => ({
    ...category,
    skills: allSkills.filter((skill) => skill.category === category.value),
  }));

  return (
    <div className="container px-4 py-12 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Skills & Technologies</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of the technologies I work with and my proficiency levels.
            I'm always learning and expanding my skill set.
          </p>
        </div>

        <div className="space-y-12">
          {skillsByCategory.map((category) => (
            <section key={category.value}>
              <h2 className="text-2xl font-semibold mb-6">{category.name}</h2>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {category.skills.map((skill) => (
                  <Card key={skill.id}>
                    <CardHeader>
                      <CardTitle className="text-lg">{skill.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Proficiency</span>
                          <span className="font-medium">{skill.proficiency}%</span>
                        </div>
                        <Progress value={skill.proficiency} />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              {category.skills.length === 0 && (
                <p className="text-muted-foreground text-center py-8">
                  No skills in this category yet.
                </p>
              )}
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
