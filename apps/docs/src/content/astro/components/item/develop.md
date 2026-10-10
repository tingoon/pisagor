## Import

```ts
import { Item } from "@pisagor/astro";
```

## Anatomy

```tsx
<Item>
  <Item.Content>
    <Item.Title />
    <Item.Description />
  </Item.Content>
  <Item.Actions />
</Item>
```

## Examples

### Default

Lay out media, title, description, and actions as one row.

:::example Default

### Variants

Choose emphasis to match list density.

:::example Variants

### Icon

Lead with an icon when a symbol is enough.

:::example Icon

### Image

Use a larger image treatment for media-forward rows.

:::example Image

### With Media

Lead with media when imagery helps recognition.

:::example WithMedia

### Header

Use item header layout for section introductions in a list.

:::example Header

### Group

Group related items so related choices stay visually and semantically together.

:::example Group

### With Avatar

Lead with an avatar when the row represents a person.

:::example WithAvatar

### As child

Navigate when the whole row is a destination.

:::example Link

## Customization

### Class names

Pass `class` for a one-off change to a single element.

Override spacing when the default density does not match the surrounding layout.

:::example CustomSpacing

### Custom recipe

Extend `itemRecipe` with `tv({ extend })` and pass it to `recipe` when the look should be reusable across the app.

:::example CustomRecipe
