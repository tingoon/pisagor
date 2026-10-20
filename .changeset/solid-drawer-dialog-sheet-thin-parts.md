---
"@pisagor/solid": minor
---

Solid `Drawer`, `Dialog` and `Sheet` follow the thin parts + shorthand pattern (mirrors React). The default export is a shorthand (`trigger`, `title`, `description`, `actions`, `scrollFade`, `showCloseButton`, `classNames`) that renders the portal, backdrop, positioner, header, scrollable body, footer and close button. Every part is a single styled element built with `withProvider` / `withContext`; compound usage starts from `.Root`.

**Breaking (Solid):** `*.Content` no longer renders `Portal`, backdrop, positioner, grabber or close button; `*.Body` no longer wraps `ScrollArea`; `*.Header` no longer takes `title` / `description`; variants (`size`, `placement`, `variant`, …) move to `.Root`. The named `DrawerRoot`, `DialogContent`, `SheetContent`, … function exports are removed; use `Drawer.*`, `Dialog.*`, `Sheet.*`.
