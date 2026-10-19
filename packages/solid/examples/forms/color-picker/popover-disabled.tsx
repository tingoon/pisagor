import { Portal } from "solid-js/web";
import { Button, ColorPicker } from "@pisagor/solid";

export function PopoverDisabled() {
  return (
    <ColorPicker.Root defaultValue="#eb5e41" disabled>
      <ColorPicker.Control>
        <ColorPicker.Trigger
          asChild={(props) => (
            <Button {...props()} size="lg" variant="ghost">
              <ColorPicker.SwatchPreview class="size-6" />
              Pick as color
            </Button>
          )}
        />
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
