import { Portal } from "solid-js/web";
import { Button, Drawer, Field, Input, ScrollArea } from "@pisagor/solid";

export function Compound() {
  return (
    <Drawer.Root>
      <Drawer.Trigger
        asChild={(props) => (
          <Button {...props()} variant="outline">
            Open
          </Button>
        )}
      />
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.Grabber>
              <Drawer.GrabberIndicator />
            </Drawer.Grabber>
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
                <Drawer.CloseTrigger
                  asChild={(props) => (
                    <Button {...props()} variant="outline">
                      Cancel
                    </Button>
                  )}
                />
                <Drawer.CloseTrigger
                  asChild={(props) => (
                    <Button {...props()}>Save changes</Button>
                  )}
                />
              </Drawer.ContentInner>
            </Drawer.Footer>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  );
}
