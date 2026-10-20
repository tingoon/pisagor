---
"@pisagor/react": minor
"@pisagor/contracts": minor
"@pisagor/presets": patch
"@pisagor/utils": patch
---

React `FileUpload` follows the thin parts + shorthand pattern. `FileUpload` is now a shorthand
(`icon`, `title`, `description`, `trigger`, `helper`, `label`, `clearTrigger`, `dropzone`,
`showList`, `classNames`, `itemClassNames`). Adds `FileUpload.Root`, `Label`, `Context`,
`FileUploadContract`, `clearTrigger` / `label` / `trigger` recipe slots, and the
`fileUpload.clearFiles` message.

**Breaking (React):**

- Compound usage starts from `FileUpload.Root`.
- Removed the style-only `DropzoneIcon`, `Title`, `Description`, and `Helper` wrappers; use the
  shorthand props (or your own markup inside `Dropzone`).
- Removed `List`; the shorthand renders the file list, or map `FileUpload.Context` files to
  `FileUpload.Item` parts.
- `ClearTrigger` and `ItemDeleteTrigger` now default a localized `aria-label`.
