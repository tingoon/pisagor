import { CaretDownIcon } from "@squidlab/phosphor-solid/icons";
import { Badge, Button, Card, Collapsible } from "@pisagor/solid";

export function Default() {
  return (
    <Card class="w-96">
      <Collapsible.Root>
        <Card.Header>
          <Card.Title>Total visits</Card.Title>
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
                  <Collapsible.Indicator>
                    <CaretDownIcon />
                  </Collapsible.Indicator>
                </Button>
              )}
            />
          </Card.Action>
        </Card.Header>
        <Collapsible.Content>
          <Collapsible.Body class="text-sm">
            <div class="mt-(--space) grid gap-3 px-(--space)">
              <div class="grid grid-cols-3 items-center gap-2">
                <div class="text-muted-foreground col-span-2">Google</div>
                <div class="place-self-end">
                  <Badge variant="success">22.3%</Badge>
                </div>
              </div>
              <div class="grid grid-cols-3 items-center gap-2">
                <div class="text-muted-foreground col-span-2">Facebook</div>
                <div class="place-self-end">
                  <Badge variant="destructive">-10.1%</Badge>
                </div>
              </div>
              <div class="grid grid-cols-3 items-center gap-2">
                <div class="text-muted-foreground col-span-2">TikTok</div>
                <div class="place-self-end">
                  <Badge variant="warning">6.8%</Badge>
                </div>
              </div>
              <div class="grid grid-cols-3 items-center gap-2">
                <div class="text-muted-foreground col-span-2">Instagram</div>
                <div class="place-self-end">
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
