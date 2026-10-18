<script lang="ts" setup>
import { Button, DropdownMenu } from "@pisagor/vue";
</script>

<template>
  <DropdownMenu>
    <DropdownMenu.Trigger as-child>
      <Button variant="outline">Open</Button>
    </DropdownMenu.Trigger>
    <DropdownMenu.Content class="w-48">
      <DropdownMenu.CheckboxItem checked value="sync">
        <DropdownMenu.ItemText>Sync files</DropdownMenu.ItemText>
        <DropdownMenu.ItemIndicator />
      </DropdownMenu.CheckboxItem>
      <DropdownMenu.CheckboxItem
        value="wipe"
        variant="destructive"
        :checked="false"
      >
        <DropdownMenu.ItemText>Wipe on sign out</DropdownMenu.ItemText>
        <DropdownMenu.ItemIndicator />
      </DropdownMenu.CheckboxItem>
    </DropdownMenu.Content>
  </DropdownMenu>
</template>
