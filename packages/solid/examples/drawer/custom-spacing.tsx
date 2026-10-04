/** @jsxImportSource solid-js */
import { Button, Field, Input } from "@pisagor/solid";
import { Drawer } from "@pisagor/solid/drawer";
export function CustomSpacing() {
  return (
    <Drawer>
      <Drawer.Trigger
        asChild={(props) => (
          <Button {...props()} variant="outline">
            Open
          </Button>
        )}
      />
      <Drawer.Content class="[--bleed:2rem] [--space:--spacing(6)]">
        <Drawer.ContentInner>
          <Drawer.Header
            description="Tighter bleed and larger internal padding than defaults."
            title="Custom spacing"
          />
          <Drawer.Body>
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
          </Drawer.Body>
        </Drawer.ContentInner>
        <Drawer.Footer>
          <Drawer.ContentInner>
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
          </Drawer.ContentInner>
        </Drawer.Footer>
      </Drawer.Content>
    </Drawer>
  );
}
