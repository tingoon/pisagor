/** @jsxImportSource solid-js */
import { Input } from "@pisagor/solid";
import { ColorPicker } from "@pisagor/solid/color-picker";
export function Disabled() {
  return (
    <ColorPicker defaultValue="#eb5e41" disabled>
      <ColorPicker.Control>
        <ColorPicker.Input
          asChild={(props) => <Input {...props()} placeholder="#EB5E41" />}
        />
      </ColorPicker.Control>
    </ColorPicker>
  );
}
