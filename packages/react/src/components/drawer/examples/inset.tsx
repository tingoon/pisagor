import { Button, Field, Input } from "@pisagor/react";
import { Drawer } from "..";
export function Inset() {
  return (
    <Drawer>
      <Drawer.Trigger asChild>
        <Button variant="outline">Open</Button>
      </Drawer.Trigger>
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
            <Drawer.CloseTrigger asChild>
              <Button variant="outline">Cancel</Button>
            </Drawer.CloseTrigger>
            <Drawer.CloseTrigger asChild>
              <Button>Save</Button>
            </Drawer.CloseTrigger>
          </Drawer.ContentInner>
        </Drawer.Footer>
      </Drawer.Content>
    </Drawer>
  );
}
