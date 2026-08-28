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

Framework packages keep their own entry for plugins and `@source` (e.g. `@pisagor/react/styles`, `@pisagor/vue/styles`) and `@import "@pisagor/tokens/styles"`.

## Z-index layers

Popover, modal, and toast each have distinct layer values (see [AGENTS.md](./AGENTS.md)).

## Font overrides

Set `--font-sans`, `--font-heading`, or `--font-mono` on `:root` in your app to override defaults without editing this package.

## Peer dependencies

`tailwindcss` ^4 — required when you compile CSS that imports this theme.
