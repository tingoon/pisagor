import { Button, Field, Input } from "@pisagor/react";
import { Popover } from "..";
export function Default() {
  return (
    <Popover>
      <Popover.Trigger asChild>
        <Button variant="outline">Open</Button>
      </Popover.Trigger>
      <Popover.Content className="w-80">
        <Popover.Header description="Set the dimensions for the layer." title="Dimensions" />
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
            <Field className="grid grid-cols-3 items-center gap-2">
              <Field.Label>Height</Field.Label>
              <Input className="col-span-2" defaultValue="25px" />
            </Field>
            <Field className="grid grid-cols-3 items-center gap-2">
              <Field.Label>Max. height</Field.Label>
              <Input className="col-span-2" defaultValue="none" />
            </Field>
          </Field.Group>
        </Popover.Body>
      </Popover.Content>
    </Popover>
  );
}
