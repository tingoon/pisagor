<script lang="ts" setup>
import { Button, DropdownMenu } from "@pisagor/vue";

const placements = ["left", "top", "bottom", "right"] as const;
</script>

<template>
  <div class="flex flex-wrap justify-center gap-2">
    <DropdownMenu.Root
      v-for="placement in placements"
      :key="placement"
      :positioning="{ placement }"
    >
      <DropdownMenu.Trigger as-child>
        <Button class="capitalize" variant="outline">
          {{ placement }}
        </Button>
      </DropdownMenu.Trigger>
      <Teleport to="body">
        <DropdownMenu.Positioner>
          <DropdownMenu.Content class="w-36">
            <DropdownMenu.Item value="edit">Edit</DropdownMenu.Item>
            <DropdownMenu.Item value="copy">Copy</DropdownMenu.Item>
            <DropdownMenu.Item value="share">Share</DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Positioner>
      </Teleport>
    </DropdownMenu.Root>
  </div>
</template>
