# Product analytics

Website first. Anonymous usage only — no emails, names, or identify calls.

## Stack

- **kadirkasim.com:** PostHog Cloud (`posthog-js`), cookieless `memory` persistence, autocapture off.
- **Solitaire Friends (later):** LevelPlay stays the ad dashboard; optional PostHog/Unity events for session/retention — update product privacy when that ships.
- **Kanvra:** `analytics: false`. Do not add SDKs until the product and privacy copy change.

## Setup

1. Create a PostHog project (US or EU host).
2. Copy `.env.example` → `.env.local` and set `NEXT_PUBLIC_POSTHOG_KEY` + `NEXT_PUBLIC_POSTHOG_HOST`.
3. In Vercel → Project → Environment Variables, add the same two keys for Production (and Preview if you want).
4. Redeploy. Events only fire when the key is present.

## Events (web)

| Event | Properties |
| --- | --- |
| `$pageview` | `$current_url` (manual capture on route change) |
| `store_click` | `product`, `store` (`app_store`) |

Admin for now: the PostHog dashboard.
