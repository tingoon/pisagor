import { Badge, Button, Card } from "@pisagor/react";
import { Collapsible } from "..";
export function Default() {
  return (
    <Card className="w-96">
      <Collapsible>
        <Card.Header title="Total visits">
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
                <Collapsible.Indicator />
              </Button>
            </Collapsible.Trigger>
          </Card.Action>
        </Card.Header>
        <Collapsible.Content className="text-sm">
          <div className="mt-(--space) grid gap-3 px-(--space)">
            <div className="grid grid-cols-3 items-center gap-2">
              <div className="col-span-2 text-muted-foreground">Google</div>
              <div className="place-self-end">
                <Badge variant="success">22.3%</Badge>
              </div>
            </div>
            <div className="grid grid-cols-3 items-center gap-2">
              <div className="col-span-2 text-muted-foreground">Facebook</div>
              <div className="place-self-end">
                <Badge variant="destructive">-10.1%</Badge>
              </div>
            </div>
            <div className="grid grid-cols-3 items-center gap-2">
              <div className="col-span-2 text-muted-foreground">TikTok</div>
              <div className="place-self-end">
                <Badge variant="warning">6.8%</Badge>
              </div>
            </div>
            <div className="grid grid-cols-3 items-center gap-2">
              <div className="col-span-2 text-muted-foreground">Instagram</div>
              <div className="place-self-end">
                <Badge variant="info">1.4%</Badge>
              </div>
            </div>
          </div>
        </Collapsible.Content>
      </Collapsible>
    </Card>
  );
}
