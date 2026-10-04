/** @jsxImportSource solid-js */
import { Button } from "@pisagor/solid/button";
import { Field } from "@pisagor/solid/field";
import { Input } from "@pisagor/solid/input";
import { Sheet } from "@pisagor/solid/sheet";

export function Default() {
  return (
    <Sheet>
      <Sheet.Trigger
        asChild={(props) => (
          <Button {...props()} variant="outline">
            Open
          </Button>
        )}
      />
      <Sheet.Content>
        <Sheet.Header>
          <Sheet.Title>Edit user</Sheet.Title>
          <Sheet.Description>
            Make changes to your account here. Click save when you're done.
          </Sheet.Description>
        </Sheet.Header>
        <Sheet.Body>
          <Field.Group>
            <Field>
              <Field.Label>Name</Field.Label>
              <Input value="Jane Doe" />
            </Field>
            <Field>
              <Field.Label>Username</Field.Label>
              <Input value="@jane.doe" />
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
