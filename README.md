# Fullstack Portfolio Website - Next.js

A modern, production-ready Next.js portfolio website for showcasing your work as a senior fullstack engineer. Built with Next.js 15+, TypeScript, Tailwind CSS, and Prisma.

![Next.js](https://img.shields.io/badge/Next.js-15+-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8?style=for-the-badge&logo=tailwind-css)
![Prisma](https://img.shields.io/badge/Prisma-5.20-2D3748?style=for-the-badge&logo=prisma)

## ✨ Features

- **Modern Tech Stack**: Next.js 15+ with App Router, React Server Components, and Server Actions
- **TypeScript**: Full type safety with strict mode enabled
- **Beautiful UI**: Tailwind CSS v4+ with shadcn/ui components
- **Animations**: Smooth transitions and hover effects with Framer Motion
- **Dark Mode**: Persistent theme toggle with next-themes
- **Responsive Design**: Mobile-first, fully responsive layout
- **SEO Optimized**: Dynamic metadata, OpenGraph tags, sitemap, and robots.txt
- **Contact Form**: Server Action-powered form with email integration (Resend)
- **Blog Support**: MDX-based blog with markdown rendering
- **Database**: Prisma ORM with SQLite (easily switchable to PostgreSQL)
- **Form Validation**: react-hook-form + Zod for type-safe forms
- **Toast Notifications**: Beautiful toast notifications with sonner
- **Accessibility**: ARIA labels, keyboard navigation, semantic HTML

## 🚀 Tech Stack

### Core
- **Next.js 15+** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **React 19** - UI library
- **Tailwind CSS v4** - Utility-first CSS framework

### UI Components
- **shadcn/ui** - High-quality component library
- **Framer Motion** - Animation library
- **lucide-react** - Icon library
- **next-themes** - Theme management

### Backend & Database
- **Prisma** - Next-generation ORM
- **SQLite** - Database (default, easily switchable to PostgreSQL)
- **Resend** - Email API for contact form

### Forms & Validation
- **react-hook-form** - Performant forms
- **Zod** - Schema validation
- **@hookform/resolvers** - Zod integration

### Content
- **react-markdown** - Markdown rendering
- **remark-gfm** - GitHub Flavored Markdown support

### Utilities
- **date-fns** - Date formatting
- **sonner** - Toast notifications

## 📁 Project Structure

```
fullstack-portfolio-website-nextjs/
├── app/                      # Next.js App Router pages
│   ├── (pages)/             # Route groups
│   │   ├── about/           # About page
│   │   ├── projects/        # Projects listing
│   │   ├── skills/          # Skills page
│   │   ├── blog/            # Blog listing
│   │   │   └── [slug]/      # Individual blog posts
│   │   └── contact/         # Contact page
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   ├── globals.css          # Global styles
│   ├── not-found.tsx        # 404 page
│   ├── error.tsx            # Error boundary
│   ├── loading.tsx          # Loading state
│   ├── sitemap.ts           # Dynamic sitemap
│   └── robots.ts            # Robots.txt
├── components/
│   ├── ui/                  # shadcn/ui components
│   ├── layout/              # Layout components (Navbar, Footer)
│   └── sections/            # Page sections (Hero, ProjectCard, etc.)
├── lib/
│   ├── utils.ts             # Utility functions
│   └── prisma.ts            # Prisma client
├── actions/
│   └── contact.ts            # Server Actions
├── hooks/
│   └── use-toast.ts         # Toast hook
├── prisma/
│   ├── schema.prisma        # Database schema
│   └── seed.ts              # Seed script
├── public/                  # Static assets
│   └── resume.pdf           # Resume file
├── types/                   # TypeScript types
└── package.json
```

## 🛠️ Installation & Setup

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- Git

### Step 1: Clone the Repository

```bash
git clone <your-repo-url>
cd fullstack-portfolio-website-nextjs
```

### Step 2: Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### Step 3: Set Up Environment Variables

Create a `.env` file in the root directory:

```env
# Database
DATABASE_URL="file:./dev.db"

# Resend API (for contact form emails)
RESEND_API_KEY="re_your_api_key_here"

# Email configuration
CONTACT_EMAIL="your-email@example.com"
FROM_EMAIL="noreply@yourdomain.com"

# Site configuration
NEXT_PUBLIC_SITE_URL="http://localhost:3000"
NEXT_PUBLIC_SITE_NAME="Your Name - Fullstack Engineer"
```

**Note**: For production, use a PostgreSQL database:
```env
DATABASE_URL="postgresql://user:password@localhost:5432/portfolio?schema=public"
```

### Step 4: Set Up Database

```bash
# Generate Prisma Client
npx prisma generate

# Push schema to database
npm run db:push

# Seed the database with sample data
npm run db:seed
```

### Step 5: Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Customization

### Adding Projects

Projects are stored in the database. You can add them via:

1. **Prisma Studio** (Recommended for development):
   ```bash
   npm run db:studio
   ```

2. **Update seed script** (`prisma/seed.ts`) and re-run:
   ```bash
   npm run db:seed
   ```

3. **Direct database access** via Prisma Client

### Adding Skills

Similar to projects, add skills through Prisma Studio or update the seed script.

### Customizing Content

- **About Page**: Edit `app/about/page.tsx` to update your bio, experience, education, and hobbies
- **Home Page**: Modify `app/page.tsx` to change hero text and CTAs
- **Blog Posts**: Add blog posts via Prisma Studio or update `prisma/seed.ts`
- **Resume**: Replace `public/resume.pdf` with your actual resume
- **Social Links**: Update social links in `components/layout/footer.tsx`
- **Site Metadata**: Edit `app/layout.tsx` to update site name, description, and OpenGraph data

### Theme Customization

Edit `app/globals.css` to customize color schemes and design tokens.

### Email Configuration

1. Sign up for [Resend](https://resend.com)
2. Get your API key
3. Add it to `.env` as `RESEND_API_KEY`
4. Configure `CONTACT_EMAIL` and `FROM_EMAIL` in `.env`

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy!

Vercel will automatically:
- Detect Next.js
- Run build commands
- Set up database (if using Vercel Postgres)

### Environment Variables for Production

Make sure to set all environment variables in your hosting platform:
- `DATABASE_URL` (use PostgreSQL for production)
- `RESEND_API_KEY`
- `CONTACT_EMAIL`
- `FROM_EMAIL`
- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_SITE_NAME`

### Database Migration

For production, use Prisma migrations:

```bash
npx prisma migrate dev --name init
```

Then in production:
```bash
npx prisma migrate deploy
```

## 📚 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run db:push` - Push Prisma schema to database
- `npm run db:seed` - Seed database with sample data
- `npm run db:studio` - Open Prisma Studio

## 🎨 Features in Detail

### Pages

- **Home (`/`)**: Hero section, featured projects, skills badges, CTA
- **About (`/about`)**: Bio, experience timeline, education, hobbies, resume download
- **Projects (`/projects`)**: Grid view of all projects with filters
- **Skills (`/skills`)**: Categorized skills with proficiency levels
- **Blog (`/blog`)**: Blog post listing with MDX support
- **Contact (`/contact`)**: Contact form with validation and email sending

### Components

- **Responsive Navigation**: Mobile hamburger menu, desktop horizontal menu
- **Theme Toggle**: Light/dark mode with system preference detection
- **Project Cards**: Animated cards with hover effects
- **Timeline**: Animated timeline for experience/education
- **Contact Form**: Validated form with Server Actions
- **Toast Notifications**: Success/error feedback

### SEO

- Dynamic metadata per page
- OpenGraph tags for social sharing
- Twitter Card support
- XML sitemap generation
- robots.txt configuration

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React Framework
- [shadcn/ui](https://ui.shadcn.com/) - Beautiful component library
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [Prisma](https://www.prisma.io/) - Next-generation ORM
- [Framer Motion](https://www.framer.com/motion/) - Animation library

## 📞 Support

- telegram: https://t.me/ledeking
- twitter:  https://x.com/ledeking_
