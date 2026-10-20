import { Portal } from "@ark-ui/react";
import { Button, Popover } from "@pisagor/react";

export function Placements() {
  const placements = ["left", "top", "bottom", "right"] as const;

  return (
    <div className="flex flex-wrap justify-center gap-2">
      {placements.map((placement) => (
        <Popover.Root key={placement} positioning={{ placement }}>
          <Popover.Trigger asChild>
            <Button className="capitalize" variant="outline">
              {placement}
            </Button>
          </Popover.Trigger>
          <Portal>
            <Popover.Positioner>
              <Popover.Content className="w-56">
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
