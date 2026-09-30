import { Button } from "../../../../../src/components/button";
import { Drawer } from "../../../../../src/components/drawer/index";
import { Field } from "../../../../../src/components/field";
import { Input } from "../../../../../src/components/input";

export function Default() {
  return (
    <Drawer>
      <Drawer.Trigger
        asChild={(props) => (
          <Button {...props()} variant="outline">
            Open
          </Button>
        )}
      />
      <Drawer.Content>
        <Drawer.ContentInner>
          <Drawer.Header
            description="Make changes to your account here. Swipe down to close."
            title="Edit profile"
          />
          <Drawer.Body>
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
