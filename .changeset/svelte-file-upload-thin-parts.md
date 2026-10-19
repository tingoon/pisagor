---
"@pisagor/svelte": minor
---

Svelte `FileUpload` follows the thin parts + shorthand pattern (mirrors React and Solid). `FileUpload` is now a shorthand (`label`, `title`, `description`, `helper`, `icon`, `dropzone`, `trigger`, `clearTrigger`, `showList`, `classNames`, `itemClassNames`); `trigger`/`clearTrigger` accept a snippet receiving the trigger props. Adds `Root`, `Label` and `Context` parts; `ClearTrigger` and `ItemDeleteTrigger` get localized default `aria-label`s. **Breaking:** compound usage starts from `FileUpload.Root`; the invented `DropzoneIcon`, `Title`, `Description`, `Helper` and `List` parts are removed (use the shorthand or plain elements).
