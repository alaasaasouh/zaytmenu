# Zayt & Ember

A bilingual Mediterranean restaurant menu website. Built with plain HTML, CSS, and JavaScript. No framework, package installation, build command, backend, API key, or paid service is needed.

## Open locally

Open `index.html` in a modern browser. All paths are relative, so the same files work at a GitHub Pages repository subpath. Internet is used only for optional Google Fonts; fallback fonts work offline. Food photography is stored locally in `assets/`.

## Upload to GitHub Pages

1. Use the repository at `https://github.com/alaasaasouh/zaytmenu`.
2. Upload `index.html`, `styles.css`, `script.js`, `.nojekyll`, and the complete `assets` folder to the repository root. Keep `index.html` at the top level.
3. Go to **Settings > Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**.
5. Select **main** and **/(root)**, then **Save**.
6. After deployment, the Pages URL is `https://alaasaasouh.github.io/zaytmenu/`.

Upload the extracted files, not the ZIP itself. The project does not include GitHub credentials or any server configuration.

## Included features

- Original flame-and-olive SVG logo, downloadable from the footer.
- Responsive layouts for phones, tablets, and desktop screens.
- English and Arabic content with right-to-left layout.
- Nine dishes across five categories, plus the full-menu view.
- Search across English and Arabic dish names and descriptions.
- Dish dialogs with ingredient and allergen information.
- Cart with quantity controls, removal, subtotals, and pickup/delivery selection.
- A three-dish sharing-feast shortcut.
- Browser-local cart and language persistence where storage is available.
- Keyboard-accessible native dialogs, focus states, and reduced-motion support.
- Itemized order review for customers to show to their server.

## Make it your own

- Brand, hero, story, and location: `index.html`.
- English and Arabic strings: `dictionary` in `script.js`.
- Dish names, descriptions, images, prices, and allergens: `dishes` in `script.js`.
- Colors, typography, spacing, and responsive layouts: `styles.css`.
- Logo: `assets/mark.svg` and `assets/logo.svg`.
- Food photography: replace the corresponding files in `assets/`.

The customer menu includes an itemized selection that customers can show to their server. It does not send orders to a kitchen, WhatsApp, or a payment processor. Before use at a physical restaurant, confirm the business address, hours, prices, recipes, and allergens.

## Assets

Original logo and site design created for this website. Stock photos are sourced from Pexels and Unsplash; see `assets/CREDITS.md`. Google Fonts: DM Sans, Manrope, Playfair Display, and Noto Sans Arabic (open-source font families).

