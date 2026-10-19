import { Button, Drawer, Field, Input } from "@pisagor/solid";

export function CustomSpacing() {
  return (
    <Drawer
      actions={
        <>
          <Drawer.CloseTrigger
            asChild={(props) => (
              <Button {...props()} variant="outline">
                Cancel
              </Button>
            )}
          />
          <Drawer.CloseTrigger
            asChild={(props) => <Button {...props()}>Save changes</Button>}
          />
        </>
      }
      classNames={{ content: "[--bleed:2rem] [--space:--spacing(6)]" }}
      description="Tighter bleed and larger internal padding than defaults."
      title="Custom spacing"
      trigger={(props) => (
        <Button {...props} variant="outline">
          Open
        </Button>
      )}
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
