import { Button } from "@pisagor/react";
import { ColorPicker } from "..";
export function PopoverDisabled() {
  return (
    <ColorPicker defaultValue="#eb5e41" disabled>
      <ColorPicker.Control>
        <ColorPicker.Trigger asChild>
          <Button size="lg" variant="ghost">
            <ColorPicker.SwatchPreview className="size-6" />
            Pick as color
          </Button>
        </ColorPicker.Trigger>
      </ColorPicker.Control>
      <ColorPicker.Content>
        <ColorPicker.Area />
      </ColorPicker.Content>
    </ColorPicker>
  );
}
