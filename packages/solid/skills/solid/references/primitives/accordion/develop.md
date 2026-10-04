## Import

```tsx
import { Accordion } from "@pisagor/solid";
```

Prefer shorthand `items` for FAQ lists; use `Accordion.Root` for custom structure.

## Examples

### Default

A single expandable section for grouping related content under a heading.

:::example Default

### Multiple

Allow several sections open at once when users compare content across panels.

:::example Multiple

### Non-collapsible

Keep at least one section open when collapsing everything would hide required content.

:::example NonCollapsible

### Disabled

Show that a section cannot be opened. Prefer explaining why nearby.

:::example Disabled

### Controlled

Drive open state from the parent when other UI depends on which section is expanded.

:::example Controlled

### Compound

Compose trigger and content parts when you need a custom section layout.

:::example Compound

### With Card

Place accordion sections inside a card surface when the group should read as one unit.

:::example WithCard
