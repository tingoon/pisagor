<script lang="ts" setup>
import { Button, Popover } from "@pisagor/vue";
</script>

<template>
  <Popover.Root>
    <Popover.Trigger as-child>
      <Button variant="outline">Open</Button>
    </Popover.Trigger>
    <Teleport to="body">
      <Popover.Positioner>
        <Popover.Content>
          <Popover.Header>
            <Popover.Title>Notifications</Popover.Title>
            <Popover.Description>Check your notifications.</Popover.Description>
          </Popover.Header>
          <Popover.Body>
            <Popover.Root>
              <Popover.Trigger as-child>
                <Button size="sm" variant="outline">Open nested</Button>
              </Popover.Trigger>
              <Teleport to="body">
                <Popover.Positioner>
                  <Popover.Content class="w-56">
                    <Popover.Header>
                      <Popover.Title>Nested popover</Popover.Title>
                      <Popover.Description>
                        You're all caught up. Check back later for new
                        notifications.
                      </Popover.Description>
                    </Popover.Header>
                  </Popover.Content>
                </Popover.Positioner>
              </Teleport>
            </Popover.Root>
          </Popover.Body>
        </Popover.Content>
      </Popover.Positioner>
    </Teleport>
  </Popover.Root>
</template>
