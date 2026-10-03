/** @jsxImportSource solid-js */
import { Button, Field, Input } from "@pisagor/solid";
import { Drawer } from "@pisagor/solid/drawer";
export function DrawerContentInner() {
  return (
    <Drawer swipeDirection="down">
      <Drawer.Trigger
        asChild={(props) => (
          <Button {...props()} variant="outline">
            Open drawer
          </Button>
        )}
      />
      <Drawer.Content>
        <Drawer.ContentInner>
          <Drawer.Header
            description="Constrains width to max-w-sm and centers content. Use it to wrap the main body or footer actions."
            title="Container"
          />
          <Drawer.Body>
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
              asChild={(props) => <Button {...props()}>Save</Button>}
            />
          </Drawer.ContentInner>
        </Drawer.Footer>
      </Drawer.Content>
    </Drawer>
  );
}
