import { Card } from "@pisagor/react";
import { cardRecipe } from "@pisagor/recipes";
import { tv } from "tailwind-variants";

const brandCardRecipe = tv({
  extend: cardRecipe,
  slots: {
    base: "border-emerald-500/40 bg-emerald-500/5",
    title: "text-emerald-900 dark:text-emerald-100",
  },
  variants: {},
});

export function CustomRecipe() {
  return (
    <Card recipe={brandCardRecipe}>
      <Card.Header
        description="Brief description about the card"
        title="Card header"
      />
      <Card.Content>
        <p className="text-muted-foreground text-sm">Card content</p>
      </Card.Content>
      <Card.Footer>
        <p className="text-muted-foreground text-sm">Footer</p>
      </Card.Footer>
    </Card>
  );
}
