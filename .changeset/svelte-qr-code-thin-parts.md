---
"@pisagor/svelte": minor
---

Svelte `QrCode` follows the thin parts + shorthand pattern (mirrors React and Solid). `QrCode` is now a shorthand (`overlay`, `classNames`) that renders the frame and pattern; adds `QrCode.Root`, `QrCode.Pattern` and `QrCode.DownloadTrigger`. **Breaking:** compound usage starts from `QrCode.Root`; `Frame` no longer renders the pattern; `QrCode.Download` is renamed `QrCode.DownloadTrigger`.
