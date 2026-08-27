---
name: add-product
description: Adds a game or app to kadirkasim.com content model and matching routes. Use when the user adds a product, landing page, support/privacy URLs, or a new slug under Games or Apps.
---

# Add a product

1. Read [docs/content-model.md](docs/content-model.md) and copy an existing file in `content/products/`.
2. Create `content/products/<slug>.md` with required frontmatter. Leave `storeUrl` empty if unknown. Do not invent metrics.
3. If Kanvra-like privacy is unknown, set `ads`, `analytics`, `iap` false only when the user confirmed; otherwise note unknown in the body.
4. Add routes: `/apps/<slug>` or `/games/<slug>` plus `/support` and `/privacy`, reading that file — no duplicate blurbs in JSX.
5. Link it from the HQ home/index by reading `content/`, not by hardcoding a third description.
6. Check [TASKS.md](TASKS.md); do not skip to Instagram or a second framework.
