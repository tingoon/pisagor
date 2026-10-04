/** @jsxImportSource solid-js */
import { Button, Field, Input, Popover } from "@pisagor/solid";
export function CustomSpacing() {
  return (
    <Popover>
      <Popover.Trigger
        asChild={(props) => (
          <Button {...props()} variant="outline">
            Open
          </Button>
        )}
      />
      <Popover.Content class="w-80 [--space:--spacing(2)] sm:[--space:--spacing(5)]">
        <Popover.Header
          description="Set the dimensions for the layer."
          title="Dimensions"
        />
        <Popover.Body>
          <Field.Group class="gap-2">
            <Field class="grid grid-cols-3 items-center gap-2">
              <Field.Label>Width</Field.Label>
              <Input class="col-span-2" defaultValue="100%" />
            </Field>
            <Field class="grid grid-cols-3 items-center gap-2">
              <Field.Label>Max. width</Field.Label>
              <Input class="col-span-2" defaultValue="300px" />
            </Field>
          </Field.Group>
        </Popover.Body>
      </Popover.Content>
    </Popover>
  );
}
