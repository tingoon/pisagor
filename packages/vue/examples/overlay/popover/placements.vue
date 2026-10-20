<script lang="ts" setup>
import { Button, Popover } from "@pisagor/vue";

const placements = ["left", "top", "bottom", "right"] as const;
</script>

<template>
  <div class="flex flex-wrap justify-center gap-2">
    <Popover.Root
      v-for="placement in placements"
      :key="placement"
      :positioning="{ placement }"
    >
      <Popover.Trigger as-child>
        <Button class="capitalize" variant="outline">{{ placement }}</Button>
      </Popover.Trigger>
      <Teleport to="body">
        <Popover.Positioner>
          <Popover.Content class="w-56">
            <Popover.Header>
              <Popover.Title>Popover</Popover.Title>
              <Popover.Description>
                This popover appears on the {{ placement }} placement of the
                trigger.
              </Popover.Description>
            </Popover.Header>
          </Popover.Content>
        </Popover.Positioner>
      </Teleport>
    </Popover.Root>
  </div>
</template>
