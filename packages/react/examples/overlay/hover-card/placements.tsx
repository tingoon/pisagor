import { Button, HoverCard } from "@pisagor/react";

export function Placements() {
  const placements = ["left", "top", "bottom", "right"] as const;

  return (
    <div className="flex flex-wrap justify-center gap-2">
      {placements.map((placement) => (
        <HoverCard
          key={placement}
          classNames={{ content: "flex flex-col gap-1" }}
          positioning={{ placement }}
          trigger={
            <Button className="capitalize" variant="outline">
              {placement}
            </Button>
          }
        >
          <h4 className="font-medium">Hover Card</h4>
          <p className="text-muted-foreground text-sm">
            This hover card appears on the {placement} placement of the trigger.
          </p>
        </HoverCard>
      ))}
    </div>
  );
}
