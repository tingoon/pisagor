import { Button, Drawer, Field, Input } from "@pisagor/react";

export function Inset() {
  return (
    <Drawer
      actions={
        <>
          <Drawer.CloseTrigger asChild>
            <Button variant="outline">Cancel</Button>
          </Drawer.CloseTrigger>
          <Drawer.CloseTrigger asChild>
            <Button>Save</Button>
          </Drawer.CloseTrigger>
        </>
      }
      description="On larger screens, the drawer appears with rounded corners and padding."
      title="Inset drawer"
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
    </Drawer>
  );
}
