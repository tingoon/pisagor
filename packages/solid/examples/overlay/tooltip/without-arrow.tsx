import { Button, Tooltip } from "@pisagor/solid";

export function WithoutArrow() {
  return (
    <Tooltip content="Saved 2 minutes ago" showArrow={false}>
      <Button variant="outline">Status</Button>
    </Tooltip>
  );
}
