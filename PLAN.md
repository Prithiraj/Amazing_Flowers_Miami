# Amazing Flowers Miami — Website Implementation Plan

## 1. Goal
Create a polished, responsive storefront for **Amazing Flowers Miami** that combines the strongest ideas from the supplied florist references without copying their invented content or business details.

The visual system merges three directions:

- **Local florist utility:** prominent call, directions, location, and service-area actions.
- **Modern flower commerce:** a clean collection rhythm, compact occasion browsing, strong shop CTAs, and mobile-first conversion patterns.
- **Editorial floral studio:** expressive serif typography, warm ivory/blush surfaces, botanical green, strong photography, and refined wedding/event storytelling.

The site remains a static, fast-loading GitHub Pages application with no backend dependency.

## 2. Reference-to-interface mapping

### Local florist reference
Use for visual direction only:
- immediate local identity
- call and directions actions near the hero
- visible location information without requiring a separate contact page
- storefront / studio photography
- compact mobile utility layout

Do **not** copy its example phone number, hours, address, review text, or other placeholder facts.

### E-commerce florist reference
Use for visual direction only:
- slim dark-green announcement bar
- restrained white header with centered navigation
- large floral hero on a pale botanical background
- horizontal occasion chips
- compact 4-up collection rhythm on desktop and 2-up mobile cards
- strong green CTA treatment
- dense but calm footer hierarchy

Do **not** copy claims such as a specific same-day cutoff, placeholder prices, fake products, ratings, or review names.

### Editorial floral studio reference
Use for visual direction only:
- high-contrast serif headlines
- burgundy/coral accent moments
- cream paper-like surfaces
- image-led composition with framed photography
- wedding/event editorial modules
- generous whitespace and fine divider lines

Do **not** copy its studio name, contact details, testimonials, prices, or service claims.

## 3. Truthfulness guardrails
The references are inspiration, not data sources. The implementation must not present invented facts as though they belong to Amazing Flowers Miami.

Allowed business details are limited to information already independently established for the business:
- **Amazing Flowers Miami**
- **252 Sunny Isles Blvd, Suite 2B, Sunny Isles Beach, FL 33160**
- **(305) 787-0700**
- **info@amazingflowersmiami.com**
- local delivery messaging for Sunny Isles / Aventura / greater Miami

Specific opening hours, delivery cut-off times, customer names, review quotations, ratings, and exact product prices are intentionally omitted unless they can be sourced directly and kept current.

## 4. Brand and visual direction
- Palette: deep botanical green, warm ivory, blush, muted coral, wine, soft sage.
- Typography: high-contrast editorial serif for headings + clean sans serif for interface/body copy.
- Photography: real flower/florist photography stays dominant.
- Motion: subtle and optional. Three.js petals are decorative only.
- Shape language: mostly squared editorial cards with modest rounding; avoid an overly app-like pill aesthetic.
- Desktop density: compact enough to feel commerce-ready, but with editorial breathing room.
- Mobile: hero first, horizontal occasion scroller, 2-up collection cards, clear utility actions.

## 5. Information architecture
1. Local delivery/contact announcement bar
2. Sticky navigation
3. Hero: Miami-local message + real floral photograph + shop/call actions + decorative Three.js petals
4. Local utility row: phone, address, directions
5. Occasion / collection quick links
6. Featured collections in a commerce-like card grid
7. Local-delivery CTA banner
8. Editorial craft / studio story section
9. Weddings + events feature
10. Visit-the-studio block with current contact details
11. Non-testimonial trust / ordering guidance cards
12. Floral inspiration gallery
13. Conversion CTA + structured footer

## 6. Image strategy
- Use real Pexels flower and florist photography documented in `PHOTO_CREDITS.md`.
- Hero imagery is flower-forward; studio imagery appears in supporting sections.
- Use descriptive alt text and lazy loading below the fold.
- Generated floral imagery remains optional and supplementary; it must not replace real photography across the site.

## 7. Three.js usage
Three.js is limited to a decorative hero canvas:
- translucent petal sprites
- slow drift/rotation
- mild pointer parallax
- disabled for `prefers-reduced-motion`
- hidden from assistive technology

The page remains fully usable if Three.js or its CDN fails.

## 8. Accessibility and UX
- Semantic landmarks and heading order
- Keyboard-accessible mobile menu
- Visible focus states
- High-contrast buttons
- Responsive from ~320px through wide desktop
- Reduced-motion support
- External commerce links behave as real links rather than fake add-to-cart controls
- No fabricated testimonial UI

## 9. Technical implementation
Static site files:
- `index.html`
- `styles-v2.css` — active reference-refined visual system
- `app.js`
- `PLAN.md`
- `PHOTO_CREDITS.md`
- `.github/workflows/pages.yml`

No build step is required. Relative asset paths keep the site compatible with GitHub project Pages.

## 10. Deployment
GitHub Pages deployment is triggered automatically on pushes to `main` using the official Pages workflow.

Published project URL:

`https://prithiraj.github.io/Amazing_Flowers_Miami/`

The reference-refined implementation was deployed successfully on 2026-09-08 via GitHub Pages workflow run #10. This documentation update triggers a final equivalent redeploy.

## 11. Acceptance checklist
- [x] Additional supplied references mapped to concrete UI decisions
- [x] Truthfulness guardrails documented
- [x] Refined responsive homepage implemented
- [x] Real photography remains dominant
- [x] Mobile 2-up commerce rhythm implemented
- [x] Local call/address/directions utility implemented
- [x] Fake reviews and invented prices removed
- [x] Three.js remains decorative progressive enhancement
- [x] GitHub Pages deployment re-verified after refinement

## 12. Implementation status
**Complete and published.** Future pushes to `main` redeploy automatically through GitHub Pages.
