# Amazing Flowers Miami — Website Implementation Plan

## 1. Goal
Create a polished, responsive marketing storefront for **Amazing Flowers Miami** that feels editorial and premium while keeping local-shop usefulness front and center. The reference screenshots point to three useful directions that are being combined here:

- **Local florist utility:** immediate phone, directions, location, and service-area information.
- **Modern commerce:** clear collection cards, featured arrangements, and strong shop CTAs.
- **Editorial luxury:** oversized serif typography, warm neutral surfaces, restrained green/coral accents, and photography-led storytelling.

The site is a static, fast-loading GitHub Pages application with no backend dependency.

## 2. Brand and visual direction
- Palette: deep botanical green, warm ivory, blush, muted clay/coral, and soft sage.
- Typography: high-contrast editorial serif for headings + clean sans serif for interface/body copy.
- Photography: real flower/florist photography remains the primary visual medium. Public stock photography is used for editorial sections; the official Amazing Flowers Miami storefront/product ecosystem is linked directly for commerce.
- Motion: subtle and optional. A lightweight Three.js petal layer decorates the hero only and never replaces the photography or content.
- Layout: generous whitespace, overlapping image cards, rounded but not overly playful surfaces, strong mobile stacking.

## 3. Information architecture
1. Announcement bar
2. Sticky navigation
3. Hero: local luxury florist message, shop/call/directions CTAs, real flower-shop photography, decorative Three.js petals
4. Quick service chips: local delivery, weddings/events, corporate/lobby work, same-day inquiry
5. Shop-by-style cards
6. Featured arrangements / price anchors linking to the live Amazing Flowers Miami store
7. Editorial craft section with real florist photography
8. Weddings + events feature
9. Local delivery/location panel with current address and directions
10. Customer sentiment / trust block
11. Floral gallery
12. Conversion CTA + footer

## 4. Content and business facts used
Current public business information is reflected in the UI:
- Amazing Flowers Miami
- 252 Sunny Isles Blvd, Suite 2B, Sunny Isles Beach, FL 33160
- (305) 787-0700
- info@amazingflowersmiami.com
- Service messaging: Sunny Isles / Aventura / Miami-area delivery

Purchase and collection CTAs intentionally link to the existing Shopify storefront instead of pretending this static site has its own cart or payment flow.

## 5. Image strategy
- Use real Pexels photography for shop, floral craft, wedding, orchid, white-floral, and rose imagery.
- Use descriptive alt text and lazy loading below the fold.
- Keep image URLs centralized in markup so they can later be replaced with first-party photography without redesigning components.
- Maintain a `PHOTO_CREDITS.md` file documenting the editorial photo sources.

## 6. Three.js usage
Three.js is limited to a small decorative hero canvas:
- translucent petal sprites
- slow drift/rotation
- mild pointer parallax
- disabled for `prefers-reduced-motion`
- hidden from assistive technology

The site remains fully usable if Three.js/CDN loading fails.

## 7. Accessibility and UX
- Semantic landmarks and heading order
- Keyboard-accessible mobile menu
- Visible focus states
- `aria` labels for icon-only buttons
- High-contrast CTA styles
- Responsive layout from ~320px through wide desktop
- Reduced-motion support
- External commerce links clearly behave as links, not fake add-to-cart buttons

## 8. Technical implementation
Static site files:
- `index.html`
- `styles.css`
- `app.js`
- `PLAN.md`
- `PHOTO_CREDITS.md`
- `.github/workflows/pages.yml`

No build step is required. Relative CSS/JS paths keep the site compatible with GitHub project Pages paths.

## 9. Deployment
GitHub's official Pages workflow is configured to:
- trigger on pushes to `main`
- upload the repository as a Pages artifact
- deploy via `actions/deploy-pages`

Initial deployment completed successfully in GitHub Actions on 2026-09-08 (workflow run #1).

## 10. Acceptance checklist
- [x] Design plan documented before implementation
- [x] Responsive homepage implemented
- [x] Real photography used throughout
- [x] Three.js decorative hero layer implemented
- [x] Current location/contact CTAs implemented
- [x] Commerce CTAs link to the existing Amazing Flowers Miami storefront
- [x] Photo credits documented
- [x] GitHub Pages workflow added
- [x] Deployment verified
