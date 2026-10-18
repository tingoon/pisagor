<script lang="ts" setup>
import { Button, Dialog, Popover } from "@pisagor/vue";
</script>

<template>
  <Dialog>
    <Dialog.Trigger as-child>
      <Button type="button" variant="outline">Open dialog</Button>
    </Dialog.Trigger>
    <Dialog.Content>
      <Dialog.Header
        description="Open the popover from the button below — it stays anchored to its trigger above the dialog."
        title="Nested layers"
      />
      <Dialog.Body>
        <Popover>
          <Popover.Trigger as-child>
            <Button type="button" variant="outline">Open popover</Button>
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
        <Dialog.CloseTrigger as-child>
          <Button type="button" variant="outline">Done</Button>
        </Dialog.CloseTrigger>
      </Dialog.Footer>
    </Dialog.Content>
  </Dialog>
</template>
