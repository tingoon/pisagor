import { Button, Drawer, Field, Input } from "@pisagor/react";

export function CustomSpacing() {
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
      classNames={{ content: "[--bleed:2rem] [--space:--spacing(6)]" }}
      description="Tighter bleed and larger internal padding than defaults."
      title="Custom spacing"
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
