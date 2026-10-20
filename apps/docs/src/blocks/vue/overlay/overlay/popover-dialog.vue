<script lang="ts" setup>
import { Button, Dialog, Popover } from "@pisagor/vue";
</script>

<template>
  <Dialog.Root>
    <Dialog.Trigger as-child>
      <Button type="button" variant="outline">Open dialog</Button>
    </Dialog.Trigger>
    <Teleport to="body">
      <Dialog.Backdrop />
      <Dialog.Positioner>
        <Dialog.Content>
          <Dialog.Header>
            <Dialog.Title>Nested layers</Dialog.Title>
            <Dialog.Description>
              Open the popover from the button below — it stays anchored to its
              trigger above the dialog.
            </Dialog.Description>
          </Dialog.Header>
          <Dialog.Body>
            <Popover.Root>
              <Popover.Trigger as-child>
                <Button type="button" variant="outline">Open popover</Button>
              </Popover.Trigger>
              <Teleport to="body">
                <Popover.Positioner>
                  <Popover.Content>
                    <Popover.Header>
                      <Popover.Title>Notifications</Popover.Title>
                      <Popover.Description>
                        You're all caught up. Check back later for new
                        notifications.
                      </Popover.Description>
                    </Popover.Header>
                  </Popover.Content>
                </Popover.Positioner>
              </Teleport>
            </Popover.Root>
          </Dialog.Body>
          <Dialog.Footer>
            <Dialog.CloseTrigger as-child>
              <Button type="button" variant="outline">Done</Button>
            </Dialog.CloseTrigger>
          </Dialog.Footer>
        </Dialog.Content>
      </Dialog.Positioner>
    </Teleport>
  </Dialog.Root>
</template>
