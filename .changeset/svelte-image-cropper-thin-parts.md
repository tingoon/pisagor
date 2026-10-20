---
"@pisagor/svelte": minor
---

Svelte `ImageCropper` follows the thin parts + shorthand pattern (mirrors React and Solid): `ImageCropper` is a shorthand (`src`, `alt`, `axis`, `classNames`) with `Root`, `Viewport`, `Image`, `Selection`, `Grid` and `Handle` parts. **Breaking:** compound usage starts from `ImageCropper.Root`; `Root` no longer takes `src` / `alt` or renders the viewport, image and selection (compose `ImageCropper.Viewport` yourself).
