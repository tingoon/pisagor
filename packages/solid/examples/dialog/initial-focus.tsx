import { Button, Dialog, Field, Input } from "@pisagor/solid";
import { Portal } from "solid-js/web";

export function InitialFocus() {
  let inputEl: HTMLInputElement | undefined;

  return (
    <Dialog.Root initialFocusEl={() => inputEl ?? null}>
      <Dialog.Trigger
        asChild={(props) => (
          <Button {...props()} variant="outline">
            Open
          </Button>
        )}
      />
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
                  <Input
                    placeholder="John Doe"
                    ref={(el) => {
                      inputEl = el;
                    }}
                  />
                </Field>
                <Field>
                  <Field.Label>Email</Field.Label>
                  <Input placeholder="john.doe@example.com" />
                </Field>
              </Field.Group>
            </Dialog.Body>
            <Dialog.Footer>
              <Dialog.CloseTrigger
                asChild={(props) => (
                  <Button {...props()} variant="outline">
                    Cancel
                  </Button>
                )}
              />
              <Dialog.CloseTrigger
                asChild={(props) => <Button {...props()}>Save</Button>}
              />
            </Dialog.Footer>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
}
