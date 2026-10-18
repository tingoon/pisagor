import { Button, Field, Input, Sheet } from "@pisagor/solid";
export function Inset() {
  return (
    <Sheet>
      <Sheet.Trigger
        asChild={(props) => (
          <Button {...props()} variant="outline">
            Open
          </Button>
        )}
      />
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
        </Sheet.Footer>
      </Sheet.Content>
    </Sheet>
  );
}
