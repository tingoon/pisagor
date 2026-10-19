import { Button, Field, Input, Sheet } from "@pisagor/react";

export function CustomSpacing() {
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
      classNames={{
        content: "[--space:--spacing(4)] sm:[--space:--spacing(8)]",
      }}
      description="Make changes to your account here. Click save when you're done."
      title="Edit user"
      trigger={<Button variant="outline">Open</Button>}
    >
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
    </Sheet>
  );
}
