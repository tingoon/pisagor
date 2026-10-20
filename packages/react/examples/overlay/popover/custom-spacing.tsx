import { Portal } from "@ark-ui/react";
import { Button, Field, Input, Popover } from "@pisagor/react";

export function CustomSpacing() {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <Button variant="outline">Open</Button>
      </Popover.Trigger>
      <Portal>
        <Popover.Positioner>
          <Popover.Content className="w-80 [--space:--spacing(2)] sm:[--space:--spacing(5)]">
            <Popover.Header>
              <Popover.Title>Dimensions</Popover.Title>
              <Popover.Description>
                Set the dimensions for the layer.
              </Popover.Description>
            </Popover.Header>
            <Popover.Body>
              <Field.Group className="gap-2">
                <Field className="grid grid-cols-3 items-center gap-2">
                  <Field.Label>Width</Field.Label>
                  <Input className="col-span-2" defaultValue="100%" />
                </Field>
                <Field className="grid grid-cols-3 items-center gap-2">
                  <Field.Label>Max. width</Field.Label>
                  <Input className="col-span-2" defaultValue="300px" />
                </Field>
              </Field.Group>
            </Popover.Body>
          </Popover.Content>
        </Popover.Positioner>
      </Portal>
    </Popover.Root>
  );
}
