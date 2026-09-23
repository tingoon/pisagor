import { Portal } from "@ark-ui/react/portal";
import { Button, Field, Input } from "@pisagor/react";
import { Dialog } from "..";
export function Nested() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button variant="outline">Open</Button>
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />

        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>Manage team member</Dialog.Title>
              <Dialog.Description>View and manage a user in your team.</Dialog.Description>
            </Dialog.Header>
            <Dialog.Body className="grid gap-2">
              <div className="grid gap-1">
                <p className="text-muted-foreground text-sm">Name</p>
                <p className="font-medium text-sm">Jane Doe</p>
              </div>
              <div className="grid gap-1">
                <p className="text-muted-foreground text-sm">Email</p>
                <p className="font-medium text-sm">you@example.com</p>
              </div>
            </Dialog.Body>
            <Dialog.Footer>
              <Dialog.Root>
                <Dialog.Trigger asChild>
                  <Button variant="outline">Edit details</Button>
                </Dialog.Trigger>
                <Portal>
                  <Dialog.Backdrop />

                  <Dialog.Positioner>
                    <Dialog.Content showCloseButton={false}>
                      <Dialog.Header>
                        <Dialog.Title>Edit details</Dialog.Title>
                        <Dialog.Description>
                          Make changes to the member&apos;s information.
                        </Dialog.Description>
                      </Dialog.Header>
                      <Dialog.Body>
                        <Field.Group>
                          <Field>
                            <Field.Label>Name</Field.Label>
                            <Input defaultValue="Jane Doe" type="text" />
                          </Field>
                          <Field>
                            <Field.Label>Email</Field.Label>
                            <Input defaultValue="you@example.com" type="text" />
                          </Field>
                        </Field.Group>
                      </Dialog.Body>
                      <Dialog.Footer>
                        <Dialog.CloseTrigger asChild>
                          <Button variant="ghost">Cancel</Button>
                        </Dialog.CloseTrigger>
                        <Button type="submit">Save changes</Button>
                      </Dialog.Footer>
                    </Dialog.Content>
                  </Dialog.Positioner>
                </Portal>
              </Dialog.Root>
            </Dialog.Footer>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
}
