# Tokens Package

Package-local guidance for global theme tokens in `packages/tokens`.

## Exports

| Path | Role |
| ---- | ---- |
| `@pisagor/tokens/styles` | Tailwind entry: `@theme`, `:root` / `.dark`, motion, elevation, z-index layers |

Framework packages import this from their own `styles.css` (`@pisagor/react/styles`, `@pisagor/vue/styles`).

## Layer scale

| Token | Default |
| ----- | ------- |
| `--layer-dropdown` / `z-dropdown` | 40 |
| `--layer-popover` / `z-popover` | 50 |
| `--layer-modal` / `z-modal` | 60 |
| `--layer-toast` / `z-toast` | 70 |

Component-only palettes (sidebar chrome, chart series) belong on components — not here.

## Font overrides

`:root` defines `--font-sans`, `--font-heading`, and `--font-mono` with self-referential fallbacks so apps can override once:

```css
:root {
  --font-sans: "Inter", ui-sans-serif, system-ui, sans-serif;
}
```

## Peer dependencies

Install **`tailwindcss`** ^4 alongside this package when compiling Tailwind entries that import `@pisagor/tokens/styles`.
