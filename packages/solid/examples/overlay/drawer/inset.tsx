import { Button, Drawer, Field, Input } from "@pisagor/solid";

export function Inset() {
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
            asChild={(props) => <Button {...props()}>Save</Button>}
          />
        </>
      }
      description="On larger screens, the drawer appears with rounded corners and padding."
      title="Inset drawer"
      trigger={(props) => (
        <Button {...props} variant="outline">
          Open
        </Button>
      )}
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
