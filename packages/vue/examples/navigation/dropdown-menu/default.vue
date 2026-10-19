<script lang="ts" setup>
import { PhArchive, PhPaperPlaneTilt, PhTrash } from "@phosphor-icons/vue";
import { Button, DropdownMenu } from "@pisagor/vue";
</script>

<template>
  <DropdownMenu :class-names="{ content: 'w-40' }">
    <template #trigger>
      <Button variant="outline">Open</Button>
    </template>
    <DropdownMenu.ItemGroup>
      <DropdownMenu.Item value="forward">
        <PhPaperPlaneTilt />
        Forward
        <DropdownMenu.Shortcut>⌘F</DropdownMenu.Shortcut>
      </DropdownMenu.Item>
      <DropdownMenu.Item value="archive">
        <PhArchive />
        Archive
        <DropdownMenu.Shortcut>⌘Z</DropdownMenu.Shortcut>
      </DropdownMenu.Item>
      <DropdownMenu.Separator />
      <DropdownMenu.Item value="delete" variant="destructive">
        <PhTrash />
        Delete
      </DropdownMenu.Item>
    </DropdownMenu.ItemGroup>
  </DropdownMenu>
</template>
