# Grid Snapshot Resume

A single-page portfolio built with Vite, React, TypeScript, and Tailwind CSS. The layout combines a resume-like left rail with a grid of featured case studies and an interactive skill matrix so visitors can scan both breadth and depth quickly.

## Getting Started

```bash
npm install
npm run dev
```

Then open `http://localhost:5173` in your browser.

## Available Scripts

- `npm run dev` – start the development server with hot module replacement
- `npm run build` – type-check and generate a production build
- `npm run preview` – preview the production build locally
- `npm run lint` – run ESLint over the project files

## Project Structure

- `src/App.tsx` – the grid snapshot resume layout and interactive skill matrix
- `src/index.css` – Tailwind directives and global theme tokens
- `tailwind.config.js` – Tailwind scanning paths and theme extensions

## Customization Notes

- Replace placeholder contact info in `src/App.tsx` with your real details before sharing
- Adjust the `projects` and `skillMatrix` data structures to reflect your actual work and skills
- Extend Tailwind tokens in `tailwind.config.js` if you need additional brand colors or typography

## Deployment

When ready to deploy, run `npm run build` and serve the `dist/` directory with any static hosting provider (Netlify, Vercel, GitHub Pages, etc.).
