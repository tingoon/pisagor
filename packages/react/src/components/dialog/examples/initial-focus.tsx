import { Portal } from "@ark-ui/react/portal";
import { Button, Field, Input } from "@pisagor/react";
import { useRef } from "react";
import { Dialog } from "..";
export function InitialFocus() {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <Dialog.Root initialFocusEl={() => inputRef.current}>
      <Dialog.Trigger asChild>
        <Button variant="outline">Open</Button>
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />

        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>Edit profile</Dialog.Title>
              <Dialog.Description>
                The first input will be focused when the dialog opens.
              </Dialog.Description>
            </Dialog.Header>
            <Dialog.Body>
              <Field.Group>
                <Field>
                  <Field.Label>Name</Field.Label>
                  <Input placeholder="John Doe" ref={inputRef} />
                </Field>
                <Field>
                  <Field.Label>Email</Field.Label>
                  <Input placeholder="john.doe@example.com" />
                </Field>
              </Field.Group>
            </Dialog.Body>
            <Dialog.Footer>
              <Dialog.CloseTrigger asChild>
                <Button variant="outline">Cancel</Button>
              </Dialog.CloseTrigger>
              <Dialog.CloseTrigger asChild>
                <Button>Save</Button>
              </Dialog.CloseTrigger>
            </Dialog.Footer>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
}
