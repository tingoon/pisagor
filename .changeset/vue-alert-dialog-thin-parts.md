---
"@pisagor/vue": minor
---

Vue `AlertDialog` follows the thin parts + shorthand pattern (mirrors React). `AlertDialog` is now a shorthand that renders the teleport, backdrop, positioner, header and action buttons. **Breaking:** compound usage starts from `AlertDialog.Root` (`<AlertDialog>` was the root before); `Content` no longer renders the teleport / backdrop / positioner; named `AlertDialogRoot`, `AlertDialogContent`, … component exports are removed (use `AlertDialog.*`; the `*Props` types are still exported).
