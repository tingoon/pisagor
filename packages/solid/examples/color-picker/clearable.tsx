/** @jsxImportSource solid-js */

import { ColorPicker, Field, InputGroup } from "@pisagor/solid";
import { createSignal } from "solid-js";
export function Clearable() {
  const [value, setValue] = createSignal("#eb5e41");

  return (
    <div class="flex flex-col gap-2">
      <Field>
        <Field.Label>Compact field</Field.Label>
        <ColorPicker.Field onValueChange={setValue} value={value()} />
      </Field>
      <Field>
        <Field.Label>Input group</Field.Label>
        <ColorPicker onValueChange={setValue} value={value()}>
          <ColorPicker.Control clearable={false}>
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
                  <InputGroup.Input {...props()} clearable={false} />
                )}
              />
              <ColorPicker.ClearTrigger />
            </InputGroup>
          </ColorPicker.Control>
          <ColorPicker.Content>
            <ColorPicker.Area>
              <ColorPicker.AreaThumb />
            </ColorPicker.Area>
          </ColorPicker.Content>
        </ColorPicker>
      </Field>
    </div>
  );
}
