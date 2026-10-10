## Import

```tsx
import { Card } from "@pisagor/react";
```

## Anatomy

```tsx
<Card>
  <Card.Header />
  <Card.Content />
  <Card.Footer />
</Card>
```

## Examples

### Default

A contained surface for related content and actions.

:::example Default

### Icon

Lead with an icon when the card category should be recognizable at a glance.

:::example Icon

### Product

Compose media, title, and actions for a product-style card.

:::example Product

## Customization

### Class names

Pass `className` for a one-off change to a single element.

Adjust padding when the card sits in a denser or roomier layout.

:::example CustomSpacing

### Custom recipe

Extend `cardRecipe` with `tv({ extend })` and pass it to `recipe` when the look should be reusable across the app.

:::example CustomRecipe
