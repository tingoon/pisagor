import { Button, Field, Input } from "@pisagor/react";
import { Drawer } from "..";
export function CustomSpacing() {
  return (
    <Drawer>
      <Drawer.Trigger asChild>
        <Button variant="outline">Open</Button>
      </Drawer.Trigger>
      <Drawer.Content className="[--bleed:2rem] [--space:--spacing(6)]">
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
