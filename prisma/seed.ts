import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding database...");

  // Clear existing data
  await prisma.contactSubmission.deleteMany();
  await prisma.blogPost.deleteMany();
  await prisma.project.deleteMany();
  await prisma.skill.deleteMany();

  // Seed Skills
  const skills = [
    // Frontend
    { name: "React", category: "frontend", proficiency: 95 },
    { name: "Next.js", category: "frontend", proficiency: 90 },
    { name: "TypeScript", category: "frontend", proficiency: 92 },
    { name: "Tailwind CSS", category: "frontend", proficiency: 88 },
    { name: "JavaScript", category: "frontend", proficiency: 95 },
    { name: "HTML/CSS", category: "frontend", proficiency: 90 },
    // Backend
    { name: "Node.js", category: "backend", proficiency: 90 },
    { name: "Express", category: "backend", proficiency: 85 },
    { name: "PostgreSQL", category: "backend", proficiency: 80 },
    { name: "MongoDB", category: "backend", proficiency: 75 },
    { name: "Prisma", category: "backend", proficiency: 88 },
    { name: "REST APIs", category: "backend", proficiency: 90 },
    { name: "GraphQL", category: "backend", proficiency: 75 },
    // Tools
    { name: "Git", category: "tools", proficiency: 92 },
    { name: "Docker", category: "tools", proficiency: 80 },
    { name: "AWS", category: "tools", proficiency: 75 },
    { name: "Vercel", category: "tools", proficiency: 90 },
    { name: "CI/CD", category: "tools", proficiency: 85 },
    { name: "Jest", category: "tools", proficiency: 80 },
  ];

  for (const skill of skills) {
    await prisma.skill.create({ data: skill });
  }
  console.log(`✅ Created ${skills.length} skills`);

  // Seed Projects
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform with payment integration",
      longDescription: "Built a complete e-commerce solution with shopping cart, payment processing, order management, and admin dashboard. Features include real-time inventory updates, email notifications, and comprehensive analytics.",
      techStack: JSON.stringify(["Next.js", "TypeScript", "Prisma", "Stripe", "Tailwind CSS"]),
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example/ecommerce",
      featured: true,
      imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800",
    },
    {
      title: "Task Management App",
      description: "Collaborative task management with real-time updates",
      longDescription: "A Kanban-style task management application with real-time collaboration features. Built with WebSockets for live updates, drag-and-drop functionality, and team workspaces.",
      techStack: JSON.stringify(["React", "Node.js", "Socket.io", "MongoDB", "Express"]),
      liveUrl: "https://example.com/tasks",
      githubUrl: "https://github.com/example/tasks",
      featured: true,
      imageUrl: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800",
    },
    {
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media management",
      longDescription: "A comprehensive dashboard for managing multiple social media accounts. Features include post scheduling, analytics visualization, engagement tracking, and automated reporting.",
      techStack: JSON.stringify(["Next.js", "TypeScript", "Chart.js", "Prisma", "PostgreSQL"]),
      liveUrl: "https://example.com/dashboard",
      githubUrl: "https://github.com/example/dashboard",
      featured: true,
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
    },
    {
      title: "Weather App",
      description: "Real-time weather information with forecasts",
      longDescription: "A beautiful weather application with location-based forecasts, hourly and daily predictions, and weather maps. Includes dark mode and customizable themes.",
      techStack: JSON.stringify(["React", "OpenWeather API", "Tailwind CSS", "Context API"]),
      liveUrl: "https://example.com/weather",
      githubUrl: "https://github.com/example/weather",
      featured: false,
      imageUrl: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800",
    },
    {
      title: "Blog Platform",
      description: "Modern blog platform with MDX support",
      longDescription: "A full-featured blog platform with MDX support, syntax highlighting, search functionality, and RSS feeds. Includes admin panel for content management.",
      techStack: JSON.stringify(["Next.js", "MDX", "Prisma", "PostgreSQL", "Tailwind CSS"]),
      liveUrl: "https://example.com/blog",
      githubUrl: "https://github.com/example/blog",
      featured: false,
    },
    {
      title: "API Gateway",
      description: "Microservices API gateway with rate limiting",
      longDescription: "A robust API gateway for managing microservices architecture. Features include request routing, rate limiting, authentication, logging, and monitoring.",
      techStack: JSON.stringify(["Node.js", "Express", "Redis", "Docker", "Kubernetes"]),
      githubUrl: "https://github.com/example/gateway",
      featured: false,
    },
  ];

  for (const project of projects) {
    await prisma.project.create({ data: project });
  }
  console.log(`✅ Created ${projects.length} projects`);

  // Seed Blog Posts
  const blogPosts = [
    {
      slug: "getting-started-with-nextjs-15",
      title: "Getting Started with Next.js 15",
      excerpt: "Learn the new features and improvements in Next.js 15, including Server Components, Server Actions, and the improved App Router.",
      content: `# Getting Started with Next.js 15

Next.js 15 brings exciting new features and improvements that make building React applications even better. In this post, we'll explore the key updates.

## Server Components by Default

One of the biggest changes is that Server Components are now the default. This means better performance out of the box.

## Server Actions

Server Actions provide a seamless way to handle form submissions and data mutations without API routes.

## Improved App Router

The App Router has been refined with better TypeScript support and improved developer experience.

## Conclusion

Next.js 15 is a significant step forward for the framework. Start exploring these features in your next project!`,
      published: true,
      publishedAt: new Date("2024-01-15"),
    },
    {
      slug: "building-scalable-react-applications",
      title: "Building Scalable React Applications",
      excerpt: "Best practices and patterns for building large-scale React applications that are maintainable and performant.",
      content: `# Building Scalable React Applications

Building scalable React applications requires careful planning and following best practices. Here are some key strategies.

## Component Architecture

Organize your components in a way that promotes reusability and maintainability.

## State Management

Choose the right state management solution for your application's needs.

## Performance Optimization

Implement code splitting, lazy loading, and memoization to keep your app fast.

## Testing

Write comprehensive tests to ensure your application works as expected.

## Conclusion

Scalability is about making the right architectural decisions early on.`,
      published: true,
      publishedAt: new Date("2024-02-01"),
    },
    {
      slug: "typescript-tips-for-better-code",
      title: "TypeScript Tips for Better Code",
      excerpt: "Advanced TypeScript patterns and tips to write more type-safe and maintainable code.",
      content: `# TypeScript Tips for Better Code

TypeScript is a powerful tool for writing better JavaScript. Here are some advanced tips.

## Utility Types

Learn to leverage TypeScript's utility types like \`Partial\`, \`Pick\`, and \`Omit\`.

## Type Guards

Use type guards to narrow types and improve type safety.

## Generics

Master generics to write more flexible and reusable code.

## Conclusion

TypeScript is a journey. Keep learning and applying these patterns.`,
      published: true,
      publishedAt: new Date("2024-02-20"),
    },
  ];

  for (const post of blogPosts) {
    await prisma.blogPost.create({ data: post });
  }
  console.log(`✅ Created ${blogPosts.length} blog posts`);

  console.log("🎉 Seeding completed!");
}

main()
  .catch((e) => {
    console.error("❌ Seeding failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
