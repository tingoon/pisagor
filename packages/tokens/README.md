# @pisagor/tokens

Framework-agnostic design tokens and Tailwind theme (`@theme`, `:root` / `.dark`, `@layer base`).

```css
@import "tailwindcss";
@import "@pisagor/tokens/styles";
```

Framework packages keep their own entry for plugins and `@source` (e.g. `@pisagor/react/styles`). Until that entry imports this package, tokens are duplicated in `packages/react/src/styles.css`.
