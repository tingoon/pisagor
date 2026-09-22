# Pisagor React — Button

## When to use

- Primary and secondary action triggers.
- Public API model: **closed**.

## Canonical import

```tsx
import { Button } from "@pisagor/react";
import { PlusIcon } from "@phosphor-icons/react";
```

## Patterns

```tsx
<Button>Button</Button>
<Button variant="outline" size="sm">Save</Button>
<Button loading={pending}>Submit</Button>
<Button aria-label="Add" size="icon-md">
  <PlusIcon />
</Button>
```

Loading prop is **`loading`** (not `isLoading`). Class prop is **`className`**.

## Source of truth

| Resource | Path |
| -------- | ---- |
| Source | `@pisagor/react` → `src/components/button/` |
| Examples | MCP `get_example` / `list_examples` |
| Recipe | `@pisagor/recipes/button` |
