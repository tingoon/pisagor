/** @jsxImportSource solid-js */
import { InputGroup } from "@pisagor/solid";
import { ColorPicker } from "@pisagor/solid/color-picker";
export function Variants() {
  return (
    <div class="flex flex-col gap-2">
      <ColorPicker defaultValue="#eb5e41" format="hsla" variant="primary">
        <ColorPicker.Control>
          <InputGroup>
            <ColorPicker.Trigger
              asChild={(props) => (
                <InputGroup.Addon {...props()}>
                  <ColorPicker.SwatchPreview />
                </InputGroup.Addon>
              )}
            />
            <ColorPicker.Input
              asChild={(props) => (
                <InputGroup.Input {...props()} placeholder="Primary" />
              )}
            />
          </InputGroup>
        </ColorPicker.Control>
      </ColorPicker>
      <ColorPicker defaultValue="#eb5e41" format="hsla" variant="secondary">
        <ColorPicker.Control>
          <InputGroup>
            <ColorPicker.Trigger
              asChild={(props) => (
                <InputGroup.Addon {...props()}>
                  <ColorPicker.SwatchPreview />
                </InputGroup.Addon>
              )}
            />
            <ColorPicker.Input
              asChild={(props) => (
                <InputGroup.Input {...props()} placeholder="Secondary" />
              )}
            />
          </InputGroup>
        </ColorPicker.Control>
      </ColorPicker>
    </div>
  );
}
