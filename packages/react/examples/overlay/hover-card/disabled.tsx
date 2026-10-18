import { Button, HoverCard } from "@pisagor/react";
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
