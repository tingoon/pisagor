import { Portal } from "solid-js/web";
import { XIcon } from "@squidlab/phosphor-solid/icons";
import { ColorPicker, Field, InputGroup } from "@pisagor/solid";
import { createSignal } from "solid-js";

export function Clearable() {
  const [value, setValue] = createSignal("#eb5e41");

  return (
    <div class="flex flex-col gap-2">
      <Field>
        <Field.Label>Compact field</Field.Label>
        <ColorPicker clearable onValueChange={setValue} value={value()} />
      </Field>
      <Field>
        <Field.Label>Input group</Field.Label>
        <ColorPicker.Root onValueChange={setValue} value={value()}>
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
                asChild={(props) => <InputGroup.Input {...props()} />}
              />
              <InputGroup.Addon align="inline-end">
                <ColorPicker.ClearTrigger
                  asChild={(props) => (
                    <InputGroup.Button
                      {...props()}
                      size="icon-xs"
                      variant="ghost"
                    >
                      <XIcon />
                    </InputGroup.Button>
                  )}
                />
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
