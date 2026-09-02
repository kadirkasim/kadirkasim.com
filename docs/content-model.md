# Content model

All public wording is markdown in `content/`. Code renders it.

## Site (`content/site.md`)

`name`, `tagline`, `position` (who you are in a few sentences).

## Product (`content/products/<slug>.md`)

Required frontmatter:

```yaml
title: Kanvra
slug: kanvra
kind: app   # app | game
status: live  # live | coming-soon
tagline: ""
description: ""
storeUrl: ""   # empty until real
privacyUpdated: "2026-08-27"
onDevice: true
ads: false
analytics: false
iap: false
adNetwork: ""           # e.g. Google AdMob when ads: true
adPublisherId: ""       # e.g. pub-…
```

Body: extra landing paragraphs. Support/privacy pages derive from flags above plus body if needed.

When `ads: true`, also publish IAB `public/app-ads.txt` at `https://kadirkasim.com/app-ads.txt`.

## Rules

- One file per product. New game = new file + routes, not a new stack.
- Empty `storeUrl` → no fake App Store button (say listing is not public yet).
- YouTube/blog posts later: `content/posts/` with `title`, `date`, `youtubeUrl` optional.
