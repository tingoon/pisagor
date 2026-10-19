import { Button, Field, Input, Sheet } from "@pisagor/react";

export function Inset() {
  return (
    <Sheet
      actions={
        <>
          <Sheet.CloseTrigger asChild>
            <Button variant="outline">Cancel</Button>
          </Sheet.CloseTrigger>
          <Sheet.CloseTrigger asChild>
            <Button>Save changes</Button>
          </Sheet.CloseTrigger>
        </>
      }
      description="This sheet uses the inset variant with rounded corners and padding."
      title="Inset sheet"
      trigger={<Button variant="outline">Open</Button>}
      variant="inset"
    >
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
    </Sheet>
  );
}
