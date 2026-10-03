/** @jsxImportSource solid-js */
import { Button } from "@pisagor/solid/button";
import { Field } from "@pisagor/solid/field";
import { Input } from "@pisagor/solid/input";
import { Popover } from "@pisagor/solid/popover";

export function Default() {
  return (
    <Popover>
      <Popover.Trigger
        asChild={(props) => (
          <Button {...props()} variant="outline">
            Open
          </Button>
        )}
      />
      <Popover.Content class="w-80">
        <Popover.Header
          description="Set the dimensions for the layer."
          title="Dimensions"
        />
        <Popover.Body>
          <Field.Group class="gap-2">
            <Field class="grid grid-cols-3 items-center gap-2">
              <Field.Label>Width</Field.Label>
              <Input class="col-span-2" value="100%" />
            </Field>
            <Field class="grid grid-cols-3 items-center gap-2">
              <Field.Label>Height</Field.Label>
              <Input class="col-span-2" value="25px" />
            </Field>
          </Field.Group>
        </Popover.Body>
      </Popover.Content>
    </Popover>
  );
}
