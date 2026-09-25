import { Badge } from "../../badge";
import { Button } from "../../button";
import { Card } from "../../card";
import { Collapsible } from "../index";

export function Default() {
  return (
    <Card class="w-96">
      <Collapsible>
        <Card.Header title="Total visits">
          <Card.Description>
            <div class="flex items-center gap-1">
              <Badge variant="success">22.3%</Badge>
              <Badge variant="info">10.1%</Badge>
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
          </div>
        </Collapsible.Content>
      </Collapsible>
    </Card>
  );
}
