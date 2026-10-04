/** @jsxImportSource solid-js */
import { Button, HoverCard } from "@pisagor/solid";
export function Disabled() {
  return (
    <HoverCard disabled>
      <HoverCard.Trigger
        asChild={(props) => (
          <Button {...props()} variant="link">
            Hover here
          </Button>
        )}
      />
      <HoverCard.Content>IT WILL NOT OPEN</HoverCard.Content>
    </HoverCard>
  );
}
