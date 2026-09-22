import { Button, Field, Input } from "@pisagor/react";
import { Sheet } from "..";
export function Inset() {
  return (
    <Sheet>
      <Sheet.Trigger asChild>
        <Button variant="outline">Open</Button>
      </Sheet.Trigger>
      <Sheet.Content variant="inset">
        <Sheet.Header>
          <Sheet.Title>Inset sheet</Sheet.Title>
          <Sheet.Description>
            This sheet uses the inset variant with rounded corners and padding.
          </Sheet.Description>
        </Sheet.Header>
        <Sheet.Body>
          <Field.Group>
            <Field>
              <Field.Label>Name</Field.Label>
              <Input defaultValue="Jane Doe" />
            </Field>
            <Field>
              <Field.Label>Email</Field.Label>
              <Input defaultValue="you@example.com" />
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
