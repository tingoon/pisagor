/** @jsxImportSource solid-js */
import { Card, Skeleton } from "@pisagor/solid";
export function InCard() {
  return (
    <Card>
      <Card.Header class="flex flex-row items-center gap-2">
        <Skeleton.Circle class="size-12" />
        <Skeleton.Text lines={2} />
      </Card.Header>
      <Card.Content>
        <Skeleton.Text lines={3} />
      </Card.Content>
      <Card.Footer class="flex items-center gap-2">
        <Skeleton.Circle class="size-12" />
        <Skeleton.Text lines={2} />
      </Card.Footer>
    </Card>
  );
}
