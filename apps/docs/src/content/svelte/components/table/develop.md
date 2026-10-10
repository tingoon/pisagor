## Import

```ts
import { Table } from "@pisagor/svelte";
```

## Anatomy

```tsx
<Table>
  <Table.Caption />
  <Table.Header>
    <Table.Row>
      <Table.Head />
    </Table.Row>
  </Table.Header>
  <Table.Body>
    <Table.Row>
      <Table.Cell />
    </Table.Row>
  </Table.Body>
  <Table.Footer />
</Table>
```

## Examples

### Default

Present comparable rows and columns for scanning.

:::example Default

### Variants

Choose visual weight or emphasis so the table matches importance in the surrounding layout.

:::example Variants

### Footer

Add a footer for summaries beneath the rows.

:::example Footer

### Actions

Add row actions when operations belong with each record.

:::example Actions

### Not Hoverable

Turn off row hover when hover affordance would distract.

:::example NotHoverable

## Customization

### Custom recipe

Extend `tableRecipe` with `tv({ extend })` and pass it to `recipe` when the look should be reusable across the app.

:::example CustomRecipe
