import { Button, HoverCard } from "@pisagor/solid";

export function Placements() {
  const placements = ["left", "top", "bottom", "right"] as const;

  return (
    <div class="flex flex-wrap justify-center gap-2">
      {placements.map((placement) => (
        <HoverCard
          classNames={{ content: "flex flex-col gap-1" }}
          positioning={{ placement }}
          trigger={
            <Button class="capitalize" variant="outline">
              {placement}
            </Button>
          }
        >
          <h4 class="font-medium">Hover Card</h4>
          <p class="text-muted-foreground text-sm">
            This hover card appears on the {placement} placement of the trigger.
          </p>
        </HoverCard>
      ))}
    </div>
  );
}
