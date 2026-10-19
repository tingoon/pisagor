---
"@pisagor/react": minor
"@pisagor/presets": patch
---

React `Drawer` now follows the thin parts + shorthand pattern. `Drawer` is a shorthand that
takes `trigger`, `title`, `description`, `actions`, `scrollFade` and `classNames` and renders
the portal, backdrop, positioner, grabber, header, scrollable body and footer for you. Every
part (`Drawer.Root`, `Trigger`, `Backdrop`, `Positioner`, `Content`, `GrabberWrapper`, `Grabber`,
`GrabberIndicator`, `ContentInner`, `Header`, `Title`, `Description`, `Body`, `Footer`,
`CloseTrigger`) is a single styled element built with `withProvider` / `withContext`.

**Breaking (React):** `Drawer.Content` no longer renders `Portal`, `Backdrop`, `Positioner` or
the grabber; `Drawer.Body` no longer wraps its children in `ScrollArea` (`scrollFade` moved to the
shorthand); `Drawer.Header` no longer takes `title` / `description`. `variant` moved from
`Drawer.Content` / `Drawer.Positioner` to `Drawer.Root`, and placement always follows
`swipeDirection`. Compound usage starts from `Drawer.Root`. The named `DrawerRoot`,
`DrawerContent`, … function exports are removed; use `Drawer.*`.

`drawerRecipe` gains empty `base`, `trigger` and `closeTrigger` slots so every part has a slot.
