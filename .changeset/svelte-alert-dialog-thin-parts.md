---
"@pisagor/svelte": minor
---

Svelte `AlertDialog` follows the thin parts + shorthand pattern (mirrors React and Solid). The shorthand renders portal, backdrop, positioner, header, scrollable body and footer; `Action` / `Cancel` stay as semantic close-trigger buttons. **Breaking:** `AlertDialog.Content` no longer portals or renders backdrop/positioner and `AlertDialog.Header` no longer takes `title` / `description`.
