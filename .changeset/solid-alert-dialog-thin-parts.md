---
"@pisagor/solid": minor
---

Solid `AlertDialog` follows the thin parts + shorthand pattern (mirrors React). The shorthand renders portal, backdrop, positioner, header, scrollable body and footer; `Action` / `Cancel` stay as semantic close-trigger buttons. **Breaking:** `AlertDialog.Content` no longer portals or renders backdrop/positioner, `AlertDialog.Header` no longer takes `title` / `description`, and the named `AlertDialogRoot`, `AlertDialogContent`, … exports are removed.
