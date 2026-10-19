<script lang="ts" setup>
import { PhCopy, PhPencil, PhTrash } from "@phosphor-icons/vue";
import { ContextMenu } from "@pisagor/vue";
</script>

<template>
  <ContextMenu
    :class-names="{
      content: 'w-48',
      trigger:
        'flex h-32 w-64 items-center justify-center rounded-lg border border-dashed text-sm',
    }"
  >
    <template #trigger>
      <span class="hidden pointer-fine:inline-block">
        Open the menu with a right-click
      </span>
      <span class="hidden pointer-coarse:inline-block">Long press here</span>
    </template>
    <ContextMenu.Item value="edit">
      <PhPencil />
      Edit
      <ContextMenu.Shortcut>⌘E</ContextMenu.Shortcut>
    </ContextMenu.Item>
    <ContextMenu.Item value="copy">
      <PhCopy />
      Copy
      <ContextMenu.Shortcut>⌘C</ContextMenu.Shortcut>
    </ContextMenu.Item>
    <ContextMenu.Separator />
    <ContextMenu.Item value="delete" variant="destructive">
      <PhTrash />
      Delete
    </ContextMenu.Item>
  </ContextMenu>
</template>
