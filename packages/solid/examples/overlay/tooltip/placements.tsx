import { Button, Tooltip } from "@pisagor/solid";
export function Placements() {
  const placements = ["left", "top", "bottom", "right"] as const;

  return (
    <div class="flex flex-wrap items-center justify-center gap-2">
      {placements.map((placement) => (
        <Tooltip content={<p>Add to library</p>} positioning={{ placement }}>
          <Button class="capitalize" variant="outline">
            {placement}
          </Button>
        </Tooltip>
      ))}
    </div>
  );
}
