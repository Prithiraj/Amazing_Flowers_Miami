# Amazing Flowers Miami

A responsive editorial storefront concept for Amazing Flowers Miami, inspired by the supplied florist website references and implemented as a lightweight static site.

**Live site:** https://prithiraj.github.io/Amazing_Flowers_Miami/

## Highlights

- Real flower and florist photography throughout
- Editorial luxury visual language with local-shop utility
- Responsive desktop/mobile navigation and layouts
- Direct call, email and Google Maps CTAs using the current Sunny Isles Beach location
- Commerce CTAs routed to the existing Amazing Flowers Miami Shopify store
- Subtle Three.js flower-petal layer in the hero as progressive enhancement
- Reduced-motion and keyboard accessibility support
- GitHub Pages continuous deployment from `main`

## Files

- `PLAN.md` — design and implementation plan
- `index.html` — site markup/content
- `styles.css` — responsive visual system
- `app.js` — navigation, reveal interactions and Three.js petals
- `PHOTO_CREDITS.md` — real-photo sources and business links
- `.github/workflows/pages.yml` — GitHub Pages deployment

## Local preview

No build step is required. Serve the repository root with any static HTTP server, for example:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.
