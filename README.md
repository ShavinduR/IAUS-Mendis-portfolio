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

- Photos and the CV live in `public/` (`3.jpeg` headshot, `2.jpeg` cider card, `UMESHA SATHSARANI CV.pdf`). Replace a file with one of the same name to update it.
- `site.email` / `site.linkedin`: footer contact links.
- `research[].image`: add a photo for the Culinary or Edible Coatings cards the same way (`asset('4.jpeg')`).

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
