import { CaretDownIcon } from "@phosphor-icons/react";
import { Badge, Button, Card, Collapsible } from "@pisagor/react";
import { collapsibleRecipe } from "@pisagor/recipes";
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
    <Card className="w-96">
      <Collapsible.Root recipe={brandCollapsibleRecipe}>
        <Card.Header>
          <Card.Title>Total visits</Card.Title>
          <Card.Description>
            <div className="flex items-center gap-1">
              <Badge variant="success">22.3%</Badge>
              <Badge variant="info">10.1%</Badge>
              <Badge variant="warning">6.8%</Badge>
              <Badge variant="destructive">1.4%</Badge>
            </div>
          </Card.Description>
          <Card.Action>
            <Collapsible.Trigger asChild>
              <Button size="sm" variant="outline">
                Details
                <Collapsible.Indicator>
                  <CaretDownIcon />
                </Collapsible.Indicator>
              </Button>
            </Collapsible.Trigger>
          </Card.Action>
        </Card.Header>
        <Collapsible.Content>
          <Collapsible.Body className="text-sm">
            <div className="mt-(--space) grid gap-3 px-(--space)">
              <div className="grid grid-cols-3 items-center gap-2">
                <div className="text-muted-foreground col-span-2">Google</div>
                <div className="place-self-end">
                  <Badge variant="success">22.3%</Badge>
                </div>
              </div>
              <div className="grid grid-cols-3 items-center gap-2">
                <div className="text-muted-foreground col-span-2">Facebook</div>
                <div className="place-self-end">
                  <Badge variant="destructive">-10.1%</Badge>
                </div>
              </div>
              <div className="grid grid-cols-3 items-center gap-2">
                <div className="text-muted-foreground col-span-2">TikTok</div>
                <div className="place-self-end">
                  <Badge variant="warning">6.8%</Badge>
                </div>
              </div>
              <div className="grid grid-cols-3 items-center gap-2">
                <div className="text-muted-foreground col-span-2">
                  Instagram
                </div>
                <div className="place-self-end">
                  <Badge variant="info">1.4%</Badge>
                </div>
              </div>
            </div>
          </Collapsible.Body>
        </Collapsible.Content>
      </Collapsible.Root>
    </Card>
  );
}
