import { Button, Drawer, Field, Input } from "@pisagor/solid";

export function Default() {
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
      description="Make changes to your account here. Swipe down to close."
      title="Edit profile"
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
