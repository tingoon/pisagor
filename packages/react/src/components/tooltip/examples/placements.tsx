import { Button } from "@pisagor/react";
import { Tooltip } from "..";
export function Placements() {
  const placements = ["left", "top", "bottom", "right"] as const;

  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      {placements.map((placement) => (
        <Tooltip
          content={<p>Add to library</p>}
          key={placement}
          positioning={{ placement }}
        >
          <Button className="capitalize" variant="outline">
            {placement}
          </Button>
        </Tooltip>
      ))}
    </div>
  );
}
