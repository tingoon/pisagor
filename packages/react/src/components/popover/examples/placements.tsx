import { Button } from "@pisagor/react";
import { Popover } from "..";
export function Placements() {
  const placements = ["left", "top", "bottom", "right"] as const;
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {placements.map((placement) => (
        <Popover key={placement} positioning={{ placement }}>
          <Popover.Trigger asChild>
            <Button className="capitalize" variant="outline">
              {placement}
            </Button>
          </Popover.Trigger>
          <Popover.Content className="w-56">
            <Popover.Header
              description={`This popover appears on the ${placement} placement of the trigger.`}
              title="Popover"
            />
          </Popover.Content>
        </Popover>
      ))}
    </div>
  );
}
