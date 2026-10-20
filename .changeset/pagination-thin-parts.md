---
"@pisagor/react": minor
"@pisagor/contracts": minor
"@pisagor/presets": patch
"@pisagor/utils": patch
---

React `Pagination` follows the thin parts + shorthand pattern. `Pagination` is now a shorthand
(`classNames`) that renders localized previous/next buttons and the page list. Adds
`Pagination.Root`, `Pagination.Context`, `PaginationContract`, and the `pagination.previous` /
`pagination.next` messages.

**Breaking (React):**

- Compound usage starts from `Pagination.Root`, which no longer auto-renders triggers and pages.
- `PrevTrigger`, `NextTrigger`, and `Item` are bare Ark parts (no `Button`, label, or icon); use
  `asChild` with your own button.
- `Pagination.Items` is removed; map pages with `Pagination.Context` (or use the shorthand).
- Named `Pagination*` part exports are removed; use `Pagination.*`.
