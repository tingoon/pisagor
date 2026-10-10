import { collapsibleRecipe } from "@pisagor/recipes";
import { Badge, Button, Card, Collapsible } from "@pisagor/solid";
import { tv } from "tailwind-variants";

const brandCollapsibleRecipe = tv({
  extend: collapsibleRecipe,
  slots: {
    indicator: "text-emerald-600",
    trigger: "text-emerald-700 dark:text-emerald-300",
  },
  variants: {},
});

export function CustomRecipe() {
  return (
    <Card class="w-96">
      <Collapsible recipe={brandCollapsibleRecipe}>
        <Card.Header title="Total visits">
          <Card.Description>
            <div class="flex items-center gap-1">
              <Badge variant="success">22.3%</Badge>
              <Badge variant="info">10.1%</Badge>
              <Badge variant="warning">6.8%</Badge>
              <Badge variant="destructive">1.4%</Badge>
            </div>
          </Card.Description>
          <Card.Action>
            <Collapsible.Trigger
              asChild={(props) => (
                <Button {...props()} size="sm" variant="outline">
                  Details
                  <Collapsible.Indicator />
                </Button>
              )}
            />
          </Card.Action>
        </Card.Header>
        <Collapsible.Content class="text-sm">
          <div class="mt-(--space) grid gap-3 px-(--space)">
            <div class="grid grid-cols-3 items-center gap-2">
              <div class="col-span-2 text-muted-foreground">Google</div>
              <div class="place-self-end">
                <Badge variant="success">22.3%</Badge>
              </div>
            </div>
            <div class="grid grid-cols-3 items-center gap-2">
              <div class="col-span-2 text-muted-foreground">Facebook</div>
              <div class="place-self-end">
                <Badge variant="destructive">-10.1%</Badge>
              </div>
            </div>
            <div class="grid grid-cols-3 items-center gap-2">
              <div class="col-span-2 text-muted-foreground">TikTok</div>
              <div class="place-self-end">
                <Badge variant="warning">6.8%</Badge>
              </div>
            </div>
            <div class="grid grid-cols-3 items-center gap-2">
              <div class="col-span-2 text-muted-foreground">Instagram</div>
              <div class="place-self-end">
                <Badge variant="info">1.4%</Badge>
              </div>
            </div>
          </div>
        </Collapsible.Content>
      </Collapsible>
    </Card>
  );
}
