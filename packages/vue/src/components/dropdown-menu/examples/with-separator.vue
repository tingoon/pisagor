<script lang="ts" setup>
import { Button } from "@pisagor/vue";
import { DropdownMenu } from "..";
</script>

<template>
  <DropdownMenu>
    <DropdownMenu.Trigger as-child>
      <Button variant="outline">Open</Button>
    </DropdownMenu.Trigger>
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
  </DropdownMenu>
</template>
