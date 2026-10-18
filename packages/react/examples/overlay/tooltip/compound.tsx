import { Portal } from "@ark-ui/react/portal";
import { Button, Tooltip } from "@pisagor/react";

export function Compound() {
  return (
    <Tooltip.Root>
      <Tooltip.Trigger asChild>
        <Button variant="outline">Hover me</Button>
      </Tooltip.Trigger>
      <Portal>
        <Tooltip.Positioner>
          <Tooltip.Content>
            <Tooltip.Arrow>
              <Tooltip.ArrowTip />
            </Tooltip.Arrow>
            Built from parts
          </Tooltip.Content>
        </Tooltip.Positioner>
      </Portal>
    </Tooltip.Root>
  );
}
