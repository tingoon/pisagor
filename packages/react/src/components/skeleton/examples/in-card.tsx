import { Card } from "@pisagor/react";
import { Skeleton } from "..";
export function InCard() {
  return (
    <Card>
      <Card.Header className="flex flex-row items-center gap-2">
        <Skeleton.Circle className="size-12" />
        <Skeleton.Text lines={2} />
      </Card.Header>
      <Card.Content>
        <Skeleton.Text lines={3} />
      </Card.Content>
      <Card.Footer className="flex items-center gap-2">
        <Skeleton.Circle className="size-12" />
        <Skeleton.Text lines={2} />
      </Card.Footer>
    </Card>
  );
}
