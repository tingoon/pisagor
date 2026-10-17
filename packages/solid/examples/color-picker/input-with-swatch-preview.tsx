import { ColorPicker, InputGroup } from "@pisagor/solid";
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
