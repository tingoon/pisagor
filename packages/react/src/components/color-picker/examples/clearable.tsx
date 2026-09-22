import { Field, InputGroup } from "@pisagor/react";
import { useState } from "react";
import { ColorPicker } from "..";
export function Clearable() {
  const [value, setValue] = useState("#eb5e41");

  return (
    <div className="flex flex-col gap-2">
      <Field>
        <Field.Label>Compact field</Field.Label>
        <ColorPicker.Field onValueChange={setValue} value={value} />
      </Field>
      <Field>
        <Field.Label>Input group</Field.Label>
        <ColorPicker onValueChange={setValue} value={value}>
          <ColorPicker.Control clearable={false}>
            <InputGroup>
              <ColorPicker.Trigger asChild>
                <InputGroup.Addon>
                  <ColorPicker.SwatchPreview />
                </InputGroup.Addon>
              </ColorPicker.Trigger>
              <ColorPicker.Input asChild>
                <InputGroup.Input clearable={false} />
              </ColorPicker.Input>
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
