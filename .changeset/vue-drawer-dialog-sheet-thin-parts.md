---
"@pisagor/vue": minor
---

Vue `Drawer`, `Dialog` and `Sheet` follow the thin parts + shorthand pattern (mirrors React). The default export is a shorthand (`trigger`, `title`, `description`, `actions`, `classNames`, …) that renders the `Teleport`, backdrop, positioner, header, body, footer and close button; compound usage starts from `.Root`. Adds `Drawer.GrabberIndicator` and `Sheet.Root`. **Breaking:** `*.Content` no longer renders the teleport, backdrop, positioner or close button; style-only wrappers were removed; named `DialogRoot`, `DrawerContent`, `SheetTitle`, … component exports and the `useDialog` helper are removed (use `Dialog.*` / `Drawer.*` / `Sheet.*`; the `*Props` types are exported).
