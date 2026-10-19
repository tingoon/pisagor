---
"@pisagor/vue": minor
---

Vue `ImageCropper` follows the thin parts + shorthand pattern (mirrors React). `ImageCropper` is now a shorthand (`src`, `alt`, `axis`, `classNames`) that renders the viewport, image, grid and eight handles; adds `ImageCropper.Root` and `Viewport`. **Breaking:** compound usage starts from `ImageCropper.Root` and must render `Viewport`; `Selection` no longer renders grids / handles.
