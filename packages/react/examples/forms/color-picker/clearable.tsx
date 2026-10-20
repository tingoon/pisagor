import { Portal } from "@ark-ui/react";
import { XIcon } from "@phosphor-icons/react";
import { ColorPicker, Field, InputGroup } from "@pisagor/react";
import { useState } from "react";

export function Clearable() {
  const [value, setValue] = useState("#eb5e41");

  return (
    <div className="flex flex-col gap-2">
      <Field>
        <Field.Label>Compact field</Field.Label>
        <ColorPicker clearable onValueChange={setValue} value={value} />
      </Field>
      <Field>
        <Field.Label>Input group</Field.Label>
        <ColorPicker.Root onValueChange={setValue} value={value}>
          <ColorPicker.Control>
            <InputGroup>
              <ColorPicker.Trigger asChild>
                <InputGroup.Addon>
                  <ColorPicker.SwatchPreview />
                </InputGroup.Addon>
              </ColorPicker.Trigger>
              <ColorPicker.Input asChild>
                <InputGroup.Input />
              </ColorPicker.Input>
              <InputGroup.Addon align="inline-end">
                <ColorPicker.ClearTrigger asChild>
                  <InputGroup.Button size="icon-xs" variant="ghost">
                    <XIcon />
                  </InputGroup.Button>
                </ColorPicker.ClearTrigger>
              </InputGroup.Addon>
            </InputGroup>
          </ColorPicker.Control>
          <Portal>
            <ColorPicker.Positioner>
              <ColorPicker.Content>
                <ColorPicker.Area>
                  <ColorPicker.AreaBackground />
                  <ColorPicker.AreaThumb />
                </ColorPicker.Area>
              </ColorPicker.Content>
            </ColorPicker.Positioner>
          </Portal>
        </ColorPicker.Root>
      </Field>
    </div>
  );
}
