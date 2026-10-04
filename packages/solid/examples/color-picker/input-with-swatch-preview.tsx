/** @jsxImportSource solid-js */
import { InputGroup } from "@pisagor/solid";
import { ColorPicker } from "@pisagor/solid/color-picker";
export function InputWithSwatchPreview() {
  return (
    <ColorPicker defaultValue="#eb5e41">
      <ColorPicker.Control>
        <InputGroup>
          <InputGroup.Addon align="inline-start">
            <ColorPicker.SwatchPreview />
          </InputGroup.Addon>
          <ColorPicker.Input
            asChild={(props) => <InputGroup.Input {...props()} />}
          />
        </InputGroup>
      </ColorPicker.Control>
    </ColorPicker>
  );
}
