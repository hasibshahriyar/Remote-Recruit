# RemoteRecruit - Features Page

A responsive recreation of the **RemoteRecruit Features** landing page, built for the Web Developer Technical Examination.

**Live Demo:** [https://remote-recruit-beige.vercel.app](https://remote-recruit-beige.vercel.app)  
**GitHub Repository:** [https://github.com/hasibshahriyar/Remote-Recruit](https://github.com/hasibshahriyar/Remote-Recruit)  
**Figma Design:** [RemoteRecruit - Home](https://www.figma.com/design/EtejDtLu3wavBclhHY6JNa/Design?node-id=1-131)

## Frameworks & Libraries

| Technology | Purpose |
|---|---|
| **React 18** | Component-based UI architecture |
| **TypeScript** | Type safety |
| **Vite** | Dev server and production build |
| **Tailwind CSS v4** | Utility-first styling and responsive layout |
| **Framer Motion** | Scroll reveal animations (fade-in / slide-up) |
| **Lucide React** | Icons (navbar, scroll-to-top) |

## Project Setup

```bash
git clone https://github.com/hasibshahriyar/Remote-Recruit.git
cd Remote-Recruit
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs to dist/
npm run preview  # preview production build
```

## Technical Exam Checklist

| Requirement | Status |
|---|---|
| React.js (v17+) | ✅ React 18 |
| Tailwind CSS styling | ✅ Tailwind v4 |
| Fully responsive (desktop / tablet / mobile) | ✅ Breakpoints at sm, md, lg |
| Component-based architecture | ✅ Sections + reusable UI components |
| Match Figma layout, spacing, colors | ✅ Aligned to provided Figma reference |
| Scroll animations (fade-in, slide-up) | ✅ `FadeIn` component with Framer Motion |
| Hover states & transitions on buttons/links | ✅ Buttons, CTA, nav links |
| Mock data for FAQ | ✅ Placeholder copy per design |
| Scroll-to-top button | ✅ `ScrollToTop` component |
| Lazy loading for images | ✅ `loading="lazy"` on all images |
| Performance & accessibility (Lighthouse ≥ 90) | ✅ Semantic HTML, alt text, ARIA labels, focus styles — verify locally with Lighthouse |

## Page Sections

1. Navbar — logo, Sign In, Sign Up (hamburger on mobile)
2. Hero — gradient background with wave transition
3. Global Reach — feature copy + job board mockup
4. Fee-Free Forever — premium membership card + PayPal pill
5. Showcase Your Talents — profile card + skill tags
6. Sign Up CTA — dashboard mockup + Get Started
7. Common Questions — static FAQ (all answers visible)
8. Pricing Section — Free/Basic and Premium cards overlapping the footer wave
9. Footer — logo, social icons, RR monogram (SVG background)

## Project Structure

```
src/
├── app/
│   ├── App.tsx
│   └── components/
│       ├── sections/     # Page sections (Hero, FAQ, PricingSection, Footer, etc.)
│       └── ui/           # Reusable UI (Button, FadeIn, FeatureCheckItem, etc.)
├── assets/images/      # Exported Figma PNG assets (4 images in use)
├── styles/             # Tailwind entry
└── main.tsx
```

## Known Issues & Limitations

- Complex Figma vector illustrations (globe, detailed dashboard chrome) are approximated using exported PNG assets from the design file.
- Sign In, Sign Up, and Get Started buttons are UI-only — no backend or form submission.
- FAQ answers use placeholder lorem-style copy as shown in the Figma design.
- Lighthouse scores depend on deployment environment; run `npm run build && npm run preview` and audit locally before submitting.

## Responsive Behavior

- **Desktop (≥1024px):** Two-column feature layouts, full nav bar, max-width 1280px container.
- **Tablet (640–1023px):** Adjusted spacing; pricing cards side-by-side or stacked by breakpoint.
- **Mobile (<640px):** Single-column stacked sections, hamburger navigation, scaled typography.
