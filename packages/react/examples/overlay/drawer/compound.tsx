import { Portal } from "@ark-ui/react";
import { Button, Drawer, Field, Input, ScrollArea } from "@pisagor/react";

export function Compound() {
  return (
    <Drawer.Root>
      <Drawer.Trigger asChild>
        <Button variant="outline">Open</Button>
      </Drawer.Trigger>
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.GrabberWrapper>
              <Drawer.Grabber />
            </Drawer.GrabberWrapper>
            <Drawer.ContentInner>
              <Drawer.Header>
                <Drawer.Title>Edit profile</Drawer.Title>
                <Drawer.Description>
                  Make changes to your account here. Swipe down to close.
                </Drawer.Description>
              </Drawer.Header>
              <ScrollArea>
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
              </ScrollArea>
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
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  );
}
