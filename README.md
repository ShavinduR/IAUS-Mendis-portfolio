# Umesha Sathsarani Mendis — Academic Portfolio

A single-page academic portfolio built with **React (Vite)**, **Tailwind CSS v4**, **Framer Motion** and **Lucide React**.

## Run locally

```bash
npm install
npm run dev
```

Production build: `npm run build` (output in `dist/`). Vercel picks up the Vite preset automatically, so no extra config is needed.

## Editing content

All copy, links and data live in `src/data/content.js`:

- `site.cvUrl`: put the public CV at `public/Umesha_Sathsarani_Mendis_CV.pdf` (or change the path).
- `site.email` / `site.linkedin`: footer contact links.
- `research[].image`: set to an image path in `public/` (for example `/research/cider.jpg`) to replace the illustrated cover with a photo.

## Structure

```
src/
  App.jsx               page composition + motion config
  data/content.js       all text content
  components/
    Navbar.jsx          sticky nav, transparent → solid on scroll, mobile menu
    Hero.jsx            intro, CTAs, profile card, highlight stats
    About.jsx           academic excellence + education/interests cards
    Research.jsx        4 project cards
    Experience.jsx      vertical timeline
    Skills.jsx          skill badges by category
    Footer.jsx          contact icons + copyright
    Reveal.jsx          scroll-reveal wrapper (respects reduced motion)
    SectionHeading.jsx  shared section header
```
