import { Button, Field, Input } from "@pisagor/react";
import { Sheet } from "..";
export function CustomSpacing() {
  return (
    <Sheet>
      <Sheet.Trigger asChild>
        <Button variant="outline">Open</Button>
      </Sheet.Trigger>
      <Sheet.Content className="[--space:--spacing(4)] sm:[--space:--spacing(8)]">
        <Sheet.Header>
          <Sheet.Title>Edit user</Sheet.Title>
          <Sheet.Description>
            Make changes to your account here. Click save when you're done.
          </Sheet.Description>
        </Sheet.Header>
        <Sheet.Body>
          <Field.Group>
            <Field>
              <Field.Label>Name</Field.Label>
              <Input defaultValue="Jane Doe" />
            </Field>
            <Field>
              <Field.Label>Username</Field.Label>
              <Input defaultValue="@jane.doe" />
            </Field>
          </Field.Group>
        </Sheet.Body>
        <Sheet.Footer>
          <Sheet.CloseTrigger asChild>
            <Button variant="outline">Cancel</Button>
          </Sheet.CloseTrigger>
          <Sheet.CloseTrigger asChild>
            <Button>Save changes</Button>
          </Sheet.CloseTrigger>
        </Sheet.Footer>
      </Sheet.Content>
    </Sheet>
  );
}
