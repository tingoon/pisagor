---
"@pisagor/solid": minor
---

Solid `Pagination` follows the thin parts + shorthand pattern (mirrors React). `Pagination` is now a shorthand (`classNames`) that renders the localized previous / next buttons, page items and ellipses; adds `Pagination.Root` and `Pagination.Context`. **Breaking:** compound usage starts from `Pagination.Root`, which no longer renders default children; `PrevTrigger`, `NextTrigger` and `Item` are the bare Ark parts (use `asChild` with your own button and icons); `Ellipsis` no longer renders an icon; `Pagination.Items` is removed (use `Pagination.Context`); named `PaginationRoot`, `PaginationItem`, … exports are removed.
