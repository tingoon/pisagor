/** @jsxImportSource solid-js */
import { Button, ColorPicker } from "@pisagor/solid";
export function PopoverDisabled() {
  return (
    <ColorPicker defaultValue="#eb5e41" disabled>
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
      <ColorPicker.Content>
        <ColorPicker.Area />
      </ColorPicker.Content>
    </ColorPicker>
  );
}
