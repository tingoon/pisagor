import { InputGroup } from "@pisagor/react";
import { ColorPicker } from "..";
export function InputWithSwatchPreview() {
  return (
    <ColorPicker defaultValue="#eb5e41">
      <ColorPicker.Control>
        <InputGroup>
          <InputGroup.Addon align="inline-start">
            <ColorPicker.SwatchPreview />
          </InputGroup.Addon>
          <ColorPicker.Input asChild>
            <InputGroup.Input />
          </ColorPicker.Input>
        </InputGroup>
      </ColorPicker.Control>
    </ColorPicker>
  );
}
