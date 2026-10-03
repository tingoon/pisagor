## Usage

**Recommended:** the single `Tooltip` export. There is no part composition API.

```tsx
<Tooltip content="Bold">
  <Button aria-label="Bold" size="icon-md" variant="outline">
    <TextBIcon />
  </Button>
</Tooltip>
```

- Pass label content with `content`.
- Style with `className` / `classNames` and sub-element bags (`contentProps`, …) — do not compose private parts.
- Icon-only triggers need an accessible name (`aria-label` or visible text).

## Import

```tsx
import { Tooltip } from "@pisagor/react";
```

Style with `@pisagor/recipes/tooltip` — no app-level `tv()`.
