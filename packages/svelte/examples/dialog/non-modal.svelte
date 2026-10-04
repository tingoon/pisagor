<script lang="ts">
import { Portal } from "@ark-ui/svelte/portal";
import { Button } from "@pisagor/svelte/button";
import { Dialog } from "@pisagor/svelte/dialog";
</script>

<Dialog.Root modal={false}>
  <Dialog.Trigger>
    <Button variant="outline">Open</Button>
  </Dialog.Trigger>
  <Portal>
    <Dialog.Backdrop />
    <Dialog.Positioner>
      <Dialog.Content>
        <Dialog.Header>
          <Dialog.Title>Non-modal dialog</Dialog.Title>
          <Dialog.Description>
            This is a non-modal dialog. You can interact with elements outside the dialog.
          </Dialog.Description>
        </Dialog.Header>
        <Dialog.Body>
          <p class="text-muted-foreground text-sm">
            Non-modal dialogs allow interaction with elements outside the dialog. Focus trapping and scroll prevention are turned off.
          </p>
        </Dialog.Body>
        <Dialog.Footer>
          <Dialog.CloseTrigger>
            <Button variant="outline">Close</Button>
          </Dialog.CloseTrigger>
        </Dialog.Footer>
      </Dialog.Content>
    </Dialog.Positioner>
  </Portal>
</Dialog.Root>
