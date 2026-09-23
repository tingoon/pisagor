import { InputGroup } from "@pisagor/react";
import { ColorPicker } from "..";
export function Variants() {
  return (
    <div className="flex flex-col gap-2">
      <ColorPicker defaultValue="#eb5e41" format="hsla" variant="primary">
        <ColorPicker.Control>
          <InputGroup>
            <ColorPicker.Trigger asChild>
              <InputGroup.Addon>
                <ColorPicker.SwatchPreview />
              </InputGroup.Addon>
            </ColorPicker.Trigger>
            <ColorPicker.Input asChild>
              <InputGroup.Input placeholder="Primary" />
            </ColorPicker.Input>
          </InputGroup>
        </ColorPicker.Control>
      </ColorPicker>
      <ColorPicker defaultValue="#eb5e41" format="hsla" variant="secondary">
        <ColorPicker.Control>
          <InputGroup>
            <ColorPicker.Trigger asChild>
              <InputGroup.Addon>
                <ColorPicker.SwatchPreview />
              </InputGroup.Addon>
            </ColorPicker.Trigger>
            <ColorPicker.Input asChild>
              <InputGroup.Input placeholder="Secondary" />
            </ColorPicker.Input>
          </InputGroup>
        </ColorPicker.Control>
      </ColorPicker>
    </div>
  );
}
