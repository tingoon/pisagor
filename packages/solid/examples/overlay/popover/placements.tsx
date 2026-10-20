import { Portal } from "solid-js/web";
import { Button, Popover } from "@pisagor/solid";

export function Placements() {
  const placements = ["left", "top", "bottom", "right"] as const;

  return (
    <div class="flex flex-wrap justify-center gap-2">
      {placements.map((placement) => (
        <Popover.Root positioning={{ placement }}>
          <Popover.Trigger
            asChild={(props) => (
              <Button {...props()} class="capitalize" variant="outline">
                {placement}
              </Button>
            )}
          />
          <Portal>
            <Popover.Positioner>
              <Popover.Content class="w-56">
                <Popover.Header>
                  <Popover.Title>Popover</Popover.Title>
                  <Popover.Description>{`This popover appears on the ${placement} placement of the trigger.`}</Popover.Description>
                </Popover.Header>
              </Popover.Content>
            </Popover.Positioner>
          </Portal>
        </Popover.Root>
      ))}
    </div>
  );
}
