---
"@pisagor/react": minor
"@pisagor/contracts": minor
---

React `ImageCropper` follows the thin parts + shorthand pattern. `ImageCropper` is now a shorthand
(`src`, `alt`, `axis`, `classNames`). Adds `ImageCropper.Root`, `Viewport`, and
`ImageCropperContract`.

**Breaking (React):**

- Compound usage starts from `ImageCropper.Root`, which no longer renders `Viewport` or an
  image from `src`; render `<ImageCropper.Viewport>` yourself.
- `Selection` no longer renders grid lines or handles; add `<ImageCropper.Grid axis="…" />` and
  `<ImageCropper.Handle position="…" />` (or use the shorthand).
- Named `ImageCropper*` part exports are removed; use `ImageCropper.*`.
