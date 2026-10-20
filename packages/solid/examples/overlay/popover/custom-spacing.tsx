import { Portal } from "solid-js/web";
import { Button, Field, Input, Popover } from "@pisagor/solid";

export function CustomSpacing() {
  return (
    <Popover.Root>
      <Popover.Trigger
        asChild={(props) => (
          <Button {...props()} variant="outline">
            Open
          </Button>
        )}
      />
      <Portal>
        <Popover.Positioner>
          <Popover.Content class="w-80 [--space:--spacing(2)] sm:[--space:--spacing(5)]">
            <Popover.Header>
              <Popover.Title>Dimensions</Popover.Title>
              <Popover.Description>
                Set the dimensions for the layer.
              </Popover.Description>
            </Popover.Header>
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
        </Popover.Positioner>
      </Portal>
    </Popover.Root>
  );
}
