import { Button } from "@pisagor/react";
import { HoverCard } from "..";
export function Disabled() {
  return (
    <HoverCard disabled>
      <HoverCard.Trigger asChild>
        <Button variant="link">Hover here</Button>
      </HoverCard.Trigger>
      <HoverCard.Content>IT WILL NOT OPEN</HoverCard.Content>
    </HoverCard>
  );
}
