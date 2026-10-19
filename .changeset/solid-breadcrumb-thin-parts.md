---
"@pisagor/solid": minor
---

Solid `Breadcrumb` parts are thin; the shorthand adds `separator` (defaults to a caret) and now
applies `classNames`. Adds `Breadcrumb.Root` styling via the `base` slot; named `BreadcrumbRoot`, `BreadcrumbList`, … exports are removed (use `Breadcrumb.*`).

**Breaking (Solid):**

- `Breadcrumb.Separator` no longer renders a default caret; pass your icon or text as children.
- `Breadcrumb.Ellipsis` no longer renders a dots icon (it keeps the localized screen-reader text);
  pass your icon as children.
