# @pisagor/tokens

Framework-agnostic design tokens and Tailwind theme (`@theme`, `:root` / `.dark`, `@layer base`).

## Export

| Path | Description |
| ---- | ----------- |
| `@pisagor/tokens/styles` | CSS theme entry — import in app or framework `styles.css` |

## Usage

```css
@import "tailwindcss";
@import "@pisagor/tokens/styles";
```

Framework packages keep their own entry for plugins and sources (e.g. `@pisagor/react/styles`) — they `@import "@pisagor/tokens/styles"` and `@import "@pisagor/recipes/styles"`.

## Z-index layers

Popover, modal, and toast each have distinct layer values — use theme utilities (`z-popover`, `z-modal`, `z-toast`), not hardcoded `z-50`. See the [tokens skill](./skills/tokens/SKILL.md).

## Font overrides

Set `--font-sans`, `--font-heading`, or `--font-mono` on `:root` in your app to override defaults without editing this package.

## Peer dependencies

`tailwindcss` ^4 — required when you compile CSS that imports this theme.
