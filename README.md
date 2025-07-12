# DmanTech Portfolio

A modern, responsive portfolio built with **React**, **Vite**, and **Tailwind CSS**. Showcases skills, projects, and contact information with interactive UI components and smooth animations.

## Features

- **Landing Page:** Hero section, About, Skills, Projects, Contact, and Footer.
- **Theme Toggle:** Light/Dark mode support.
- **Animated Background:** Star and meteor effects.
- **Toast Notifications:** Custom toast system using Radix UI.
- **Contact Form:** EmailJS integration for direct messaging.
- **Responsive Design:** Mobile-friendly navigation and layouts.

## Folder Structure

```
src/
  assets/           # Images and SVGs
  components/       # Reusable UI components
    ui/             # Toast and toaster components
  hooks/            # Custom React hooks
  lib/              # Utility functions
  pages/            # Page-level components (Home, NotFound)
  index.css         # Global styles
  App.jsx           # Main app component
  main.jsx          # Entry point
public/
  projects/         # Project images
  vite.svg, Xlogo.svg
```

## Getting Started

1. **Install dependencies:**
   ```sh
   npm install
   ```

2. **Run the development server:**
   ```sh
   npm run dev
   ```

3. **Build for production:**
   ```sh
   npm run build
   ```

4. **Preview production build:**
   ```sh
   npm run preview
   ```

## Customization

- **Add your projects:** Edit [`src/components/ProjectSection.jsx`](src/components/ProjectSection.jsx).
- **Update skills/certifications:** Edit [`src/components/SkillsSection.jsx`](src/components/SkillsSection.jsx).
- **Change contact info:** Edit [`src/components/ContactSection.jsx`](src/components/ContactSection.jsx).

## Tech Stack

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Radix UI](https://www.radix-ui.com/)
- [EmailJS](https://www.emailjs.com/)

## License

MIT

---
