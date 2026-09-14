---
name: Calm Data Editorial
colors:
  light:
    page: '#ffffff'
    ink: '#202624'
    muted: '#606965'
    green: '#21694f'
    line: '#dce3de'
    soft: '#f2f5f3'
    chart: '#f6f8fa'
    actual: '#21694f'
    predicted: '#4c73b4'
  dark:
    page: '#141817'
    ink: '#edf2ef'
    muted: '#adb9b2'
    green: '#91d6b6'
    line: '#35423b'
    soft: '#1c2320'
    chart: '#202825'
    actual: '#91d6b6'
    predicted: '#9bbcff'
typography:
  display:
    fontFamily: Aptos Display, Segoe UI, system-ui, sans-serif
    fontSize: 5rem
    fontWeight: '500'
    lineHeight: 5.3rem
    letterSpacing: 0
  display-tablet:
    fontFamily: Aptos Display, Segoe UI, system-ui, sans-serif
    fontSize: 3.75rem
    fontWeight: '500'
    lineHeight: 4rem
    letterSpacing: 0
  display-mobile:
    fontFamily: Aptos Display, Segoe UI, system-ui, sans-serif
    fontSize: 2.625rem
    fontWeight: '500'
    lineHeight: 2.8rem
    letterSpacing: 0
  headline-lg:
    fontFamily: Aptos Display, Segoe UI, system-ui, sans-serif
    fontSize: 2.625rem
    fontWeight: '500'
    lineHeight: 3.4rem
    letterSpacing: 0
  headline-md:
    fontFamily: Aptos Display, Segoe UI, system-ui, sans-serif
    fontSize: 2.125rem
    fontWeight: '500'
    lineHeight: 2.45rem
    letterSpacing: 0
  headline-sm:
    fontFamily: Aptos Display, Segoe UI, system-ui, sans-serif
    fontSize: 1.375rem
    fontWeight: '500'
    lineHeight: 1.6rem
    letterSpacing: 0
  lead:
    fontFamily: Aptos, Segoe UI, system-ui, sans-serif
    fontSize: 1.75rem
    fontWeight: '400'
    lineHeight: 2.55rem
    letterSpacing: 0
  body:
    fontFamily: Aptos, Segoe UI, system-ui, sans-serif
    fontSize: 1rem
    fontWeight: '400'
    lineHeight: 1.72
    letterSpacing: 0
  body-sm:
    fontFamily: Aptos, Segoe UI, system-ui, sans-serif
    fontSize: 0.875rem
    fontWeight: '400'
    lineHeight: 1.5rem
    letterSpacing: 0
  label:
    fontFamily: Cascadia Mono, Cascadia Code, Consolas, monospace
    fontSize: 0.6875rem
    fontWeight: '500'
    lineHeight: 1.1rem
    letterSpacing: 0
rounded:
  sm: 0.25rem
  md: 0.375rem
  full: 9999px
spacing:
  container: min(1120px, calc(100% - 64px))
  container-mobile: calc(100% - 36px)
  nav-height: 92px
  section-y: 4.5rem
  section-y-mobile: 2.8125rem
  gap-sm: 0.75rem
  gap-md: 1.5rem
  gap-lg: 2.5rem
  gap-xl: 3.75rem
---

## Brand & Style

The current portfolio uses a calm editorial system for a data scientist profile. The visual language is intentionally restrained: white space, quiet green accents, thin dividers, and direct Indonesian copy. It should feel thoughtful, credible, and easy to stay with.

The tone is professional without feeling rigid. Sections are arranged like a clean case-study document, with enough structure for scanning and enough breathing room for reading. The design should make unfinished portfolio content feel intentional while still leaving clear spaces for real projects, education, internship experience, skills, and links.

## Current Page Structure

- **Entry:** `index.html` redirects immediately to `code.html`.
- **Main page:** `code.html` contains the portfolio experience.
- **Styles:** Tailwind CSS is loaded in `code.html` through the Tailwind CDN. The page defines its Tailwind theme tokens in the inline `window.tailwind.config` block and uses utility classes directly in the markup.
- **Behavior:** `portfolio.js` controls theme switching, language switching, and the project carousel.
- **Media:** `screen.png` is used as the current placeholder image for all project slides.

## Color System

The palette is built around paper-like surfaces and muted data-green accents.

- **Light page:** `#ffffff` keeps the portfolio open and readable.
- **Light ink:** `#202624` gives text enough contrast without becoming harsh black.
- **Muted text:** `#606965` supports descriptions, placeholders, captions, and footer copy.
- **Accent green:** `#21694f` signals identity, links, buttons, progress dots, and section markers.
- **Soft band:** `#f2f5f3` separates process, projects, and contact sections without using heavy blocks.
- **Line:** `#dce3de` creates the main structure through subtle borders.

Dark mode keeps the same quiet editorial character:

- **Dark page:** `#141817`
- **Dark ink:** `#edf2ef`
- **Dark muted:** `#adb9b2`
- **Dark accent green:** `#91d6b6`
- **Dark line:** `#35423b`
- **Dark soft band:** `#1c2320`

## Typography

The typography has been softened so the page feels more inviting and less forceful.

- **Display and headings:** `Aptos Display`, falling back to `Segoe UI` and system sans fonts. Headings use `font-weight: 500` to keep authority without shouting.
- **Body text:** `Aptos`, falling back to `Segoe UI` and system sans fonts. Body copy uses a relaxed `1.72` line height for comfortable long-form reading.
- **Labels and numbers:** `Cascadia Mono`, falling back to `Cascadia Code` and `Consolas`. This keeps a technical data feel while reducing the stiffness of Consolas as the first choice.
- **Letter spacing:** all text uses `letter-spacing: 0` so labels, headings, and body copy remain natural.

Key type sizes:

- **Hero title:** `80px` desktop, `60px` tablet, `42px` mobile.
- **Section headings:** `34px` default, with larger contextual headings such as `.about h2` at `42px`.
- **Lead text:** `28px` desktop and `22px` mobile.
- **Body:** `16px` with relaxed line height.
- **Micro labels:** `11px` to `12px`, used sparingly for structure.

## Layout & Spacing

The layout uses Tailwind utility classes with a centered content container and generous but controlled width.

- **Desktop container:** `w-[min(1120px,calc(100%_-_64px))]`
- **Mobile container:** `max-[600px]:w-[calc(100%_-_36px)]`
- **Navigation:** 92px minimum height on desktop, wrapping gracefully on small screens.
- **Section rhythm:** 72px vertical padding on desktop and 45px on mobile.
- **Primary grid:** two-column editorial layouts for intro support, journey, project slides, and contact.
- **Process grid:** four columns on desktop, two columns on mobile.
- **Skills grid:** three columns on desktop, one column on mobile.

## Components

### Navigation

The header uses a simple text brand, direct anchor links, a compact language toggle, and a compact theme toggle. The language toggle switches between Indonesian and English without a page reload. The brand mark `ds.` is green and slightly heavier than surrounding text, but it now uses the display sans stack instead of a serif to feel more cohesive.

### Hero

The hero is direct: an eyebrow label, a large role title, a two-line lead, supporting copy, one green call-to-action, and a reserved professional portrait slot. The content uses a two-column grid on desktop so the portrait sits near the headline instead of floating low on the page. The title is intentionally large but now lighter in weight, which keeps the first screen confident without feeling aggressive.

The portrait slot uses a `4 / 5` aspect ratio so a headshot or half-body professional photo can be dropped in without disturbing the layout. Replace the placeholder block with an image element using equivalent Tailwind classes for `aspect-[4/5]`, `object-cover`, border, and radius.

### Process Steps

Process cards are unframed editorial blocks defined by top borders. They avoid heavy card styling so the section reads as a method rather than a dashboard.

### Journey Items

Journey entries use the same top-border system. Placeholder content is shown with a small green left border to mark areas that still need real details.

### Project Carousel

Projects appear in a horizontal snap carousel. Each slide pairs a project image area with copy, stack tags, and placeholder repository or demo notes. Controls use dots plus compact square icon buttons.

### Skill Columns

The skills section uses three simple columns for tools, hard skills, and soft skills. Each column is an editorial block with a top rule and concise body copy.

### Contact

The contact section uses a two-column layout with simple row links for LinkedIn, GitHub, and other contact channels. Rows are separated by thin dividers and use small muted metadata for missing links.

## Interaction

- **Theme toggle:** switches between light and dark mode, stores the preference in `localStorage`, and updates the browser theme color.
- **Language toggle:** switches page copy between Indonesian and English, stores the preference in `localStorage`, updates `html[lang]`, and keeps ARIA labels/title text in sync.
- **Carousel:** supports automatic rotation, previous/next controls, dot navigation, keyboard arrows, pause on focus, and reduced-motion preferences.
- **Focus states:** use visible outlines in blue or green so keyboard navigation remains clear.
- **Reduced motion:** disables smooth scrolling when the user prefers reduced motion.

## Accessibility

The page includes a skip link, semantic landmarks, ARIA labels for navigation and carousel controls, live slide count updates, and accessible image alt text for current placeholders. Text contrast is tuned for both light and dark modes, and content wraps defensively on small screens.

## Design Direction

Future updates should keep the portfolio calm, evidence-focused, and human. Use real project images when available, keep body copy concise, and avoid visual effects that compete with the content. The strongest version of this design will come from specific project proof, thoughtful writing, and a typography system that invites people to read a little longer.
