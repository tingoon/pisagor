import { Portal } from "@ark-ui/react";
import { Button, ColorPicker } from "@pisagor/react";

export function PopoverDisabled() {
  return (
    <ColorPicker.Root defaultValue="#eb5e41" disabled>
      <ColorPicker.Control>
        <ColorPicker.Trigger asChild>
          <Button size="lg" variant="ghost">
            <ColorPicker.SwatchPreview className="size-6" />
            Pick as color
          </Button>
        </ColorPicker.Trigger>
      </ColorPicker.Control>
      <Portal>
        <ColorPicker.Positioner>
          <ColorPicker.Content>
            <ColorPicker.Area>
              <ColorPicker.AreaBackground />
            </ColorPicker.Area>
          </ColorPicker.Content>
        </ColorPicker.Positioner>
      </Portal>
    </ColorPicker.Root>
  );
}
