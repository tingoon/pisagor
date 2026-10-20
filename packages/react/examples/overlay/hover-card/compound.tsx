import { Portal } from "@ark-ui/react";
import { Button, HoverCard } from "@pisagor/react";

export function Compound() {
  return (
    <HoverCard.Root>
      <HoverCard.Trigger asChild>
        <Button variant="link">Hover here</Button>
      </HoverCard.Trigger>
      <Portal>
        <HoverCard.Positioner>
          <HoverCard.Content>
            <p className="text-muted-foreground text-sm">
              Built from parts with an explicit portal and positioner.
            </p>
            <HoverCard.Arrow />
          </HoverCard.Content>
        </HoverCard.Positioner>
      </Portal>
    </HoverCard.Root>
  );
}
