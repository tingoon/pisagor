/** @jsxImportSource solid-js */

import { Button, Field, Input, Select } from "@pisagor/solid";
import { Dialog } from "@pisagor/solid/dialog";
import { Portal } from "solid-js/web";
export function CustomSpacing() {
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
          <Dialog.Content class="[--space:--spacing(4)] sm:[--space:--spacing(8)]">
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
                        { label: "main", value: "main" },
                        { label: "develop", value: "develop" },
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
