# OJT Portfolio Website

A modern, minimal, and fully responsive portfolio website built for showcasing your OJT experience, projects, and skills.

## Tech Stack
- React 18
- Vite
- TailwindCSS
- Framer Motion
- React Router v6
- Lucide React (Icons)
- React Helmet Async (SEO)

## Setup & Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```
   This will generate a `dist` folder that you can deploy to any static host (Vercel, Netlify, GitHub Pages, cPanel).

## How to Edit Content

All content is driven by local JavaScript files located in the `src/data/` directory. You do not need to touch the component code to update your portfolio.

- **`src/data/profile.js`**: Edit your name, role, tagline, bio, contact details, social links, and resume URL.
- **`src/data/projects.js`**: Add or remove portfolio projects. You can define tech stacks, descriptions, cover images, and gallery images here.
- **`src/data/skills.js`**: Update your technical skills and progress percentages.
- **`src/data/experience.js`**: Manage your timeline for OJT, work experience, and education.
- **`src/data/certificates.js`**: Add any certifications or achievements.
- **`src/data/testimonials.js`**: Update recommendations or reviews from colleagues/managers.

### Images and Assets
Place your images and `resume.pdf` in the `public/` folder, then reference them in your data files using a leading slash (e.g., `/resume.pdf`).

## Design & Customization
To change the primary color scheme or typography, edit the `tailwind.config.js` file. The current setup uses `Inter` for body text and `Outfit` for headings, with a Teal (`#14b8a6`) primary color palette.
