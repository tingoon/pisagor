/** @jsxImportSource solid-js */
import { ColorPicker, Input } from "@pisagor/solid";
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
