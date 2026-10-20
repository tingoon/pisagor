---
"@pisagor/react": minor
"@pisagor/presets": patch
---

React `Breadcrumb` parts are thin; the shorthand adds `separator` (defaults to a caret) and now
applies `classNames`. Adds a `base` recipe slot for the root.

**Breaking (React):**

- `Breadcrumb.Separator` no longer renders a default caret; pass your icon or text as children.
- `Breadcrumb.Ellipsis` no longer renders a dots icon (it keeps the localized screen-reader text);
  pass your icon as children.
