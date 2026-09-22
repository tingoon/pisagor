# Styling rules (Pisagor Astro)

- Prefer semantic tokens (`text-muted-foreground`, `bg-primary`, …) over raw palette classes.
- Prefer `variant` / `size` before restyling with `class`.
- Use `class` mainly for **layout** (`flex`, `gap-*`, `max-w-md`).
- Use `flex` / `grid` + `gap-*` — not `space-x-*` / `space-y-*`.
- Prefer `size-*` when width equals height; prefer `truncate`.
- Optional: `cn()` from `@pisagor/utils` for merged/conditional classes (`utils` is **not** a dep of `@pisagor/astro` — install separately if needed).
- Do not add manual `z-index` on overlays.
- Recipes live in `@pisagor/recipes` — do not call `tv()` in app code.

