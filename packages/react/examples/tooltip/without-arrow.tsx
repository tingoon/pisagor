import { Button, Tooltip } from "@pisagor/react";

export function WithoutArrow() {
  return (
    <Tooltip content="Saved 2 minutes ago" showArrow={false}>
      <Button variant="outline">Status</Button>
    </Tooltip>
  );
}
