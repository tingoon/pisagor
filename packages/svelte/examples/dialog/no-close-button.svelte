<script lang="ts">
import { Portal } from "@ark-ui/svelte/portal";
import { Button, Dialog } from "@pisagor/svelte";
</script>

<Dialog.Root>
  <Dialog.Trigger>
    <Button variant="outline">Open</Button>
  </Dialog.Trigger>
  <Portal>
    <Dialog.Backdrop />
    <Dialog.Positioner>
      <Dialog.Content showCloseButton={false}>
        <Dialog.Header>
          <Dialog.Title>No close button</Dialog.Title>
          <Dialog.Description>
            You can only close this dialog using the buttons in the footer, by
            pressing Escape or by clicking the backdrop.
          </Dialog.Description>
        </Dialog.Header>
      </Dialog.Content>
    </Dialog.Positioner>
  </Portal>
</Dialog.Root>
