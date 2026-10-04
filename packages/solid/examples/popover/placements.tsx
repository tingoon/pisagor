/** @jsxImportSource solid-js */
import { Button, Popover } from "@pisagor/solid";
export function Placements() {
  const placements = ["left", "top", "bottom", "right"] as const;
  return (
    <div class="flex flex-wrap justify-center gap-2">
      {placements.map((placement) => (
        <Popover positioning={{ placement }}>
          <Popover.Trigger
            asChild={(props) => (
              <Button {...props()} class="capitalize" variant="outline">
                {placement}
              </Button>
            )}
          />
          <Popover.Content class="w-56">
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
