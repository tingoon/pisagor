import { Button, HoverCard } from "@pisagor/react";

export function Disabled() {
  return (
    <HoverCard disabled trigger={<Button variant="link">Hover here</Button>}>
      IT WILL NOT OPEN
    </HoverCard>
  );
}
