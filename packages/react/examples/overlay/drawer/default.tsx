import { Button, Drawer, Field, Input } from "@pisagor/react";

export function Default() {
  return (
    <Drawer
      actions={
        <>
          <Drawer.CloseTrigger asChild>
            <Button variant="outline">Cancel</Button>
          </Drawer.CloseTrigger>
          <Drawer.CloseTrigger asChild>
            <Button>Save changes</Button>
          </Drawer.CloseTrigger>
        </>
      }
      description="Make changes to your account here. Swipe down to close."
      title="Edit profile"
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
    </Drawer>
  );
}
