# RR Web Studio Portfolio

A modern, production-ready portfolio website for Rishi Ramandwal (RR Web Studio) built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- ✨ Premium design with glassmorphism effects
- 🎨 Animated gradients and micro-interactions
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Fast performance with Next.js 14
- 🎭 Smooth animations with Framer Motion
- 🎯 SEO optimized
- 🚀 Vercel deployment ready

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Fonts**: Google Fonts (Poppins, Inter, Open Sans)

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Customization

### 1. Replace Logo
- Add your logo to `/public/logo.png`
- Update the RR monogram in `components/Hero.tsx` and `components/Navbar.tsx`

### 2. Update Content
- **About section**: Edit bio in `components/About.tsx`
- **Skills**: Modify skills array in `components/Skills.tsx`
- **Projects**: Update projects array in `components/Projects.tsx` with your real projects
- **Contact**: Add your contact details in `components/Contact.tsx`

### 3. Add Project URLs
- In `components/Projects.tsx`, add `liveUrl` and `codeUrl` to each project
- Replace placeholder links in `components/ProjectCard.tsx`

### 4. Integrate Contact Form
- Add backend integration in `components/Contact.tsx` (e.g., EmailJS, Formspree, or API route)

## Deployment to Vercel

See the deployment guide below for detailed instructions.

## License

This project is created for Rishi Ramandwal / RR Web Studio.
