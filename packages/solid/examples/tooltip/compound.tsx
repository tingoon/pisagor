import { Button, Tooltip } from "@pisagor/solid";
import { Portal } from "solid-js/web";

export function Compound() {
  return (
    <Tooltip.Root>
      <Tooltip.Trigger
        asChild={(props) => (
          <Button {...props()} variant="outline">
            Hover me
          </Button>
        )}
      />
      <Portal>
        <Tooltip.Positioner>
          <Tooltip.Content>
            <Tooltip.Arrow>
              <Tooltip.ArrowTip />
            </Tooltip.Arrow>
            Composed from parts
          </Tooltip.Content>
        </Tooltip.Positioner>
      </Portal>
    </Tooltip.Root>
  );
}
