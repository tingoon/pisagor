<script lang="ts">
import { Portal } from "@ark-ui/svelte/portal";
import { Button, Dialog, Field, Input } from "@pisagor/svelte";

const initialFocusEl = () =>
  document.getElementById("dialog-initial-focus-input") as HTMLElement | null;
</script>

<Dialog.Root {initialFocusEl}>
  <Dialog.Trigger>
    <Button variant="outline">Open</Button>
  </Dialog.Trigger>
  <Portal>
    <Dialog.Backdrop />
    <Dialog.Positioner>
      <Dialog.Content>
        <Dialog.Header>
          <Dialog.Title>Edit profile</Dialog.Title>
          <Dialog.Description>The first input will be focused when the dialog opens.</Dialog.Description>
        </Dialog.Header>
        <Dialog.Body>
          <Field.Group>
            <Field>
              <Field.Label>Name</Field.Label>
              <Input id="dialog-initial-focus-input" placeholder="John Doe" />
            </Field>
            <Field>
              <Field.Label>Email</Field.Label>
              <Input placeholder="john.doe@example.com" />
            </Field>
          </Field.Group>
        </Dialog.Body>
        <Dialog.Footer>
          <Dialog.CloseTrigger>
            <Button variant="outline">Cancel</Button>
          </Dialog.CloseTrigger>
          <Dialog.CloseTrigger>
            <Button>Save</Button>
          </Dialog.CloseTrigger>
        </Dialog.Footer>
      </Dialog.Content>
    </Dialog.Positioner>
  </Portal>
</Dialog.Root>
