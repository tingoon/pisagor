<script lang="ts" setup>
import { Button, Popover } from "@pisagor/vue";

const items = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  label: `Item ${i + 1}`,
}));
</script>

<template>
  <Popover.Root>
    <Popover.Trigger as-child>
      <Button variant="outline">Open</Button>
    </Popover.Trigger>
    <Teleport to="body">
      <Popover.Positioner>
        <Popover.Content class="h-80 w-72">
          <Popover.Header>
            <Popover.Title>Scrollable content</Popover.Title>
          </Popover.Header>
          <Popover.Body>
            <ul class="flex flex-col gap-1">
              <li
                v-for="item in items"
                :key="item.id"
                class="hover:bg-muted rounded-md px-2 py-1.5 text-sm"
              >
                {{ item.label }}
              </li>
            </ul>
          </Popover.Body>
          <Popover.Footer>
            <Popover.CloseTrigger as-child>
              <Button>Close</Button>
            </Popover.CloseTrigger>
          </Popover.Footer>
        </Popover.Content>
      </Popover.Positioner>
    </Teleport>
  </Popover.Root>
</template>
