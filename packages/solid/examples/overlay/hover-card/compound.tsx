import { Portal } from "solid-js/web";
import { Button, HoverCard } from "@pisagor/solid";

export function Compound() {
  return (
    <HoverCard.Root>
      <HoverCard.Trigger
        asChild={(props) => (
          <Button {...props()} variant="link">
            Hover here
          </Button>
        )}
      />
      <Portal>
        <HoverCard.Positioner>
          <HoverCard.Content>
            <p class="text-muted-foreground text-sm">
              Built from parts with an explicit portal and positioner.
            </p>
            <HoverCard.Arrow />
          </HoverCard.Content>
        </HoverCard.Positioner>
      </Portal>
    </HoverCard.Root>
  );
}
