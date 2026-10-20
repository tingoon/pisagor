<script lang="ts" setup>
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
          <DropdownMenu.Item value="new">New file</DropdownMenu.Item>
          <DropdownMenu.Item value="open">Open file</DropdownMenu.Item>
          <DropdownMenu.Item value="save">Save</DropdownMenu.Item>
          <DropdownMenu.Separator />
          <DropdownMenu.Item value="copy">Copy</DropdownMenu.Item>
          <DropdownMenu.Item value="paste">Paste</DropdownMenu.Item>
          <DropdownMenu.Separator />
          <DropdownMenu.Item value="preferences">Preferences</DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Positioner>
    </Teleport>
  </DropdownMenu.Root>
</template>
