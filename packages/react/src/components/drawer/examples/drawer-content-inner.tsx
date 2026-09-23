import { Button, Field, Input } from "@pisagor/react";
import { Drawer } from "..";
export function DrawerContentInner() {
  return (
    <Drawer swipeDirection="down">
      <Drawer.Trigger asChild>
        <Button variant="outline">Open drawer</Button>
      </Drawer.Trigger>
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
