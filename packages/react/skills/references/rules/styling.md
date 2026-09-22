# Styling rules (Pisagor React)

- Prefer semantic tokens (`text-muted-foreground`, `bg-primary`, …) over raw palette classes.
- Prefer `variant` / `size` before restyling with `className`.
- Use `className` mainly for **layout** (`flex`, `gap-*`, `max-w-md`).
- Use `flex` / `grid` + `gap-*` — not `space-x-*` / `space-y-*`.
- Prefer `size-*` when width equals height; prefer `truncate`.
- Use `cn()` from `@pisagor/utils` for merged/conditional classes.
- Do not add manual `z-index` on overlays.
- Recipes live in `@pisagor/recipes` — do not call `tv()` in app code.
- Icons: `@phosphor-icons/react` (e.g. `PlusIcon`). Decorative: `aria-hidden`; icon-only: `aria-label`.

