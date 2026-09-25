import { Button } from "@pisagor/react";
import { HoverCard } from "..";
export function Placements() {
  const placements = ["left", "top", "bottom", "right"] as const;
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {placements.map((placement) => (
        <HoverCard key={placement} positioning={{ placement }}>
          <HoverCard.Trigger asChild>
            <Button className="capitalize" variant="outline">
              {placement}
            </Button>
          </HoverCard.Trigger>
          <HoverCard.Content className="flex flex-col gap-1">
            <h4 className="font-medium">Hover Card</h4>
            <p className="text-muted-foreground text-sm">
              This hover card appears on the {placement} placement of the
              trigger.
            </p>
          </HoverCard.Content>
        </HoverCard>
      ))}
    </div>
  );
}
