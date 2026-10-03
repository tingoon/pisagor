<script lang="ts">
import { Button, Dialog, Popover } from "@pisagor/svelte";
</script>

<Dialog.Root>
  <Dialog.Trigger>
    <Button variant="outline">Open dialog</Button>
  </Dialog.Trigger>
  <Dialog.Content>
    <Dialog.Header>
      <Dialog.Title>Nested layers</Dialog.Title>
      <Dialog.Description>
        Open the popover from the button below — it stays anchored to its
        trigger above the dialog.
      </Dialog.Description>
    </Dialog.Header>
    <Dialog.Body>
      <Popover>
        <Popover.Trigger>
          <Button variant="outline">Open popover</Button>
        </Popover.Trigger>
        <Popover.Content>
          <Popover.Header
            description="You're all caught up. Check back later for new notifications."
            title="Notifications"
          />
        </Popover.Content>
      </Popover>
    </Dialog.Body>
    <Dialog.Footer>
      <Dialog.CloseTrigger>
        <Button variant="outline">Done</Button>
      </Dialog.CloseTrigger>
    </Dialog.Footer>
  </Dialog.Content>
</Dialog.Root>
