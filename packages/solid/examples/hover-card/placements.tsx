/** @jsxImportSource solid-js */
import { Button, HoverCard } from "@pisagor/solid";
export function Placements() {
  const placements = ["left", "top", "bottom", "right"] as const;
  return (
    <div class="flex flex-wrap justify-center gap-2">
      {placements.map((placement) => (
        <HoverCard positioning={{ placement }}>
          <HoverCard.Trigger
            asChild={(props) => (
              <Button {...props()} class="capitalize" variant="outline">
                {placement}
              </Button>
            )}
          />
          <HoverCard.Content class="flex flex-col gap-1">
            <h4 class="font-medium">Hover Card</h4>
            <p class="text-muted-foreground text-sm">
              This hover card appears on the {placement} placement of the
              trigger.
            </p>
          </HoverCard.Content>
        </HoverCard>
      ))}
    </div>
  );
}
