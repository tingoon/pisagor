import { Button, Field, Input } from "@pisagor/react";
import { Drawer } from "..";
export function Default() {
  return (
    <Drawer>
      <Drawer.Trigger asChild>
        <Button variant="outline">Open</Button>
      </Drawer.Trigger>
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
            <Drawer.CloseTrigger asChild>
              <Button variant="outline">Cancel</Button>
            </Drawer.CloseTrigger>
            <Drawer.CloseTrigger asChild>
              <Button>Save changes</Button>
            </Drawer.CloseTrigger>
          </Drawer.ContentInner>
        </Drawer.Footer>
      </Drawer.Content>
    </Drawer>
  );
}
