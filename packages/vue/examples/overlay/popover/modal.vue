<script lang="ts" setup>
import { Button, Popover } from "@pisagor/vue";
</script>

<template>
  <Popover.Root modal>
    <Popover.Trigger as-child>
      <Button variant="outline">Open</Button>
    </Popover.Trigger>
    <Teleport to="body">
      <Popover.Positioner>
        <Popover.Content>
          <Popover.Header>
            <Popover.Title>Notifications</Popover.Title>
            <Popover.Description>
              You're all caught up. Check back later for new notifications.
            </Popover.Description>
          </Popover.Header>
        </Popover.Content>
      </Popover.Positioner>
    </Teleport>
  </Popover.Root>
</template>
