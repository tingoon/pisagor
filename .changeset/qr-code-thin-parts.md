---
"@pisagor/react": minor
"@pisagor/contracts": minor
"@pisagor/presets": patch
---

React `QrCode` follows the thin parts + shorthand pattern. `QrCode` is now a shorthand
(`overlay`, `classNames`) that renders the frame and pattern. Adds `QrCode.Root`, `Pattern`,
`DownloadTrigger`, and `QrCodeContract`.

**Breaking (React):**

- Compound usage starts from `QrCode.Root`, which no longer auto-renders a frame.
- `Frame` no longer renders `Pattern`; add `<QrCode.Pattern />`.
- `QrCode.Download` is renamed to `QrCode.DownloadTrigger` (Ark name).
- Named `QrCodeRoot`, `QrCodeFrame`, `QrCodeOverlay`, and `QrCodeDownload` exports are removed.
