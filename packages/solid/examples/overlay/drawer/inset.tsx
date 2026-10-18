import { Button, Drawer, Field, Input } from "@pisagor/solid";
export function Inset() {
  return (
    <Drawer>
      <Drawer.Trigger
        asChild={(props) => (
          <Button {...props()} variant="outline">
            Open
          </Button>
        )}
      />
      <Drawer.Content variant="inset">
        <Drawer.ContentInner>
          <Drawer.Header
            description="On larger screens, the drawer appears with rounded corners and padding."
            title="Inset drawer"
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
