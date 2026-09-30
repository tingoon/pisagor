# Pisagor Vue — Button

## When to use

- Primary and secondary action triggers.
- Public API model: **closed**.

## Canonical import

```ts
import { Button } from "@pisagor/vue";
import { PhPlus } from "@phosphor-icons/vue";
```

## Patterns

```vue
<Button>Button</Button>
<Button variant="outline" size="sm">Save</Button>
<Button :loading="pending">Submit</Button>
<Button aria-label="Add" size="icon-md">
  <PhPlus />
</Button>
```

Loading prop is **`loading`**. Class prop is **`class`**.

## Source of truth

| Resource | Path |
| -------- | ---- |
| Source | `@pisagor/vue` → `src/components/button/` |
| Examples | MCP `get_example` / `list_examples` |
| Recipe | `@pisagor/recipes/button` |
