# Amazing Flowers Miami — Website Implementation Plan

## 1. Goal
Create a polished, responsive marketing storefront for **Amazing Flowers Miami** that feels editorial and premium while keeping local-shop usefulness front and center. The supplied florist references are deliberately combined rather than copied:

- **Local florist utility:** immediate phone, directions, location, and service-area information.
- **Modern commerce:** clear collection cards, featured arrangements, strong shop CTAs, and quick browsing paths.
- **Editorial luxury:** oversized serif typography, warm neutral surfaces, restrained green/coral accents, and photography-led storytelling.

The site is a static, fast-loading GitHub Pages application with no backend dependency.

## 2. Reference-to-interface mapping
The three supplied references drive different parts of the finished UI:

### Local florist reference
- prominent local identity and contact actions
- call / directions / visit affordances
- service information visible without entering the commerce site
- studio/location section with real floral-shop photography

### E-commerce florist reference
- collection-first shopping structure
- product-card rhythm and clear price anchors
- direct shop CTAs routed to the existing Amazing Flowers Miami storefront
- compact responsive navigation and mobile-first conversion flow

### Editorial floral studio reference
- high-contrast serif headlines
- warm ivory/blush surfaces and botanical green
- photography-led compositions with layered/overlapping cards
- weddings/events storytelling and generous whitespace

The result should feel like **Amazing Flowers Miami**, not a clone of any one reference.

## 3. Brand and visual direction
- Palette: deep botanical green, warm ivory, blush, muted clay/coral, and soft sage.
- Typography: high-contrast editorial serif for headings + clean sans serif for interface/body copy.
- Photography: real flower/florist photography remains the primary visual medium. Public stock photography is used for editorial sections; the official Amazing Flowers Miami storefront/product ecosystem is linked directly for commerce.
- Motion: subtle and optional. A lightweight Three.js petal layer decorates the hero only and never replaces the photography or content.
- Layout: generous whitespace, overlapping image cards, rounded but not overly playful surfaces, strong mobile stacking.

## 4. Information architecture
1. Announcement bar
2. Sticky navigation
3. Hero: local luxury florist message, shop/call CTAs, real flower-shop photography, decorative Three.js petals
4. Quick service strip: local delivery, weddings/events, corporate/lobby work, same-day inquiry
5. Shop-by-style cards
6. Featured arrangements / price anchors linking to the live Amazing Flowers Miami store
7. Editorial craft section with real florist photography
8. Weddings + events feature
9. Local delivery/location panel with current address and directions
10. Customer sentiment / trust block
11. Floral gallery
12. Conversion CTA + footer

## 5. Content and business facts used
Current public business information is reflected in the UI:
- Amazing Flowers Miami
- 252 Sunny Isles Blvd, Suite 2B, Sunny Isles Beach, FL 33160
- (305) 787-0700
- info@amazingflowersmiami.com
- Service messaging: Sunny Isles / Aventura / Miami-area delivery

Purchase and collection CTAs intentionally link to the existing Shopify storefront instead of pretending this static site has its own cart or payment flow.

## 6. Image strategy
- Use real Pexels photography for shop, floral craft, wedding, orchid, white-floral, rose, and inspiration imagery.
- Use descriptive alt text and lazy loading below the fold.
- Keep image URLs centralized in markup so they can later be replaced with first-party photography without redesigning components.
- Maintain a `PHOTO_CREDITS.md` file documenting the editorial photo sources.
- Generated flower imagery is optional; the production concept intentionally keeps real photography dominant.

## 7. Three.js usage
Three.js is limited to a small decorative hero canvas:
- translucent petal sprites
- slow drift/rotation
- mild pointer parallax
- disabled for `prefers-reduced-motion`
- hidden from assistive technology

The site remains fully usable if Three.js/CDN loading fails.

## 8. Accessibility and UX
- Semantic landmarks and heading order
- Keyboard-accessible mobile menu
- Visible focus states
- `aria` labels for icon-only buttons
- High-contrast CTA styles
- Responsive layout from ~320px through wide desktop
- Reduced-motion support
- External commerce links clearly behave as links, not fake add-to-cart buttons

## 9. Technical implementation
Static site files:
- `index.html`
- `styles.css`
- `app.js`
- `PLAN.md`
- `PHOTO_CREDITS.md`
- `.github/workflows/pages.yml`

No build step is required. Relative CSS/JS paths keep the site compatible with GitHub project Pages paths.

## 10. Deployment
GitHub's official Pages workflow is configured to:
- trigger on pushes to `main`
- upload the repository as a Pages artifact
- deploy via `actions/deploy-pages`

The published project URL is:

`https://prithiraj.github.io/Amazing_Flowers_Miami/`

## 11. Acceptance checklist
- [x] Design plan documented in Markdown
- [x] Supplied design references mapped to concrete UI decisions
- [x] Responsive homepage implemented
- [x] Real photography used throughout
- [x] Three.js decorative hero layer implemented as progressive enhancement
- [x] Current location/contact CTAs implemented
- [x] Commerce CTAs link to the existing Amazing Flowers Miami storefront
- [x] Photo credits documented
- [x] GitHub Pages workflow added
- [x] Deployment verified

## 12. Implementation status
**Complete and published.** Future pushes to `main` are automatically redeployed to GitHub Pages.