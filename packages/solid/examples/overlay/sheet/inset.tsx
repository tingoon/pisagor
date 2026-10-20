import { Button, Field, Input, Sheet } from "@pisagor/solid";

export function Inset() {
  return (
    <Sheet
      actions={
        <>
          <Sheet.CloseTrigger
            asChild={(props) => (
              <Button {...props()} variant="outline">
                Cancel
              </Button>
            )}
          />
          <Sheet.CloseTrigger
            asChild={(props) => <Button {...props()}>Save changes</Button>}
          />
        </>
      }
      description="This sheet uses the inset variant with rounded corners and padding."
      title="Inset sheet"
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
    </Sheet>
  );
}
