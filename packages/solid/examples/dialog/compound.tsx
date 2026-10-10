import { Button, Dialog, Field, Input, Select } from "@pisagor/solid";
import { Portal } from "solid-js/web";

export function Compound() {
  return (
    <Dialog.Root>
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
              <Dialog.Title>Edit project</Dialog.Title>
              <Dialog.Description>
                Make changes to your project settings.
              </Dialog.Description>
            </Dialog.Header>
            <Dialog.Body>
              <Field.Set>
                <Field.Group>
                  <Field>
                    <Field.Label>Name</Field.Label>
                    <Input placeholder="Your project" />
                  </Field>
                  <Field>
                    <Field.Label>Main branch</Field.Label>
                    <Select
                      items={[
                        "main",
                        "develop",
                        "feature/123",
                        "release/1.0.0",
                      ]}
                      placeholder="Select branch"
                    />
                  </Field>
                </Field.Group>
              </Field.Set>
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
