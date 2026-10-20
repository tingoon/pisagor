---
"@pisagor/vue": minor
---

Vue `FileUpload` follows the thin parts + shorthand pattern (mirrors React). `FileUpload` is now a shorthand (`icon`, `title`, `description`, `trigger`, `helper`, `label`, `clearTrigger` — each also a slot — plus `dropzone`, `showList`, `classNames`, `itemClassNames`); adds `FileUpload.Root`, `Label`, `Context`. **Breaking:** compound usage starts from `FileUpload.Root`; `DropzoneIcon`, `Title`, `Description`, `Helper` and `List` were removed; `ClearTrigger` / `ItemDeleteTrigger` default a localized `aria-label`.
