import { Input } from "@pisagor/react";
import { ColorPicker } from "..";
export function Disabled() {
  return (
    <ColorPicker defaultValue="#eb5e41" disabled>
      <ColorPicker.Control>
        <ColorPicker.Input asChild>
          <Input placeholder="#EB5E41" />
        </ColorPicker.Input>
      </ColorPicker.Control>
    </ColorPicker>
  );
}
