<script lang="ts" setup>
import { PhCopy, PhPencil, PhShare } from "@phosphor-icons/vue";
import { Button, DropdownMenu } from "@pisagor/vue";
</script>

<template>
  <DropdownMenu.Root>
    <DropdownMenu.Trigger as-child>
      <Button variant="outline">Open</Button>
    </DropdownMenu.Trigger>
    <Teleport to="body">
      <DropdownMenu.Positioner>
        <DropdownMenu.Content class="w-40">
          <DropdownMenu.Item value="edit">
            <PhPencil />
            Edit
          </DropdownMenu.Item>
          <DropdownMenu.Item value="copy">
            <PhCopy />
            Copy
          </DropdownMenu.Item>
          <DropdownMenu.Item value="share">
            <PhShare />
            Share
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Positioner>
    </Teleport>
  </DropdownMenu.Root>
</template>
