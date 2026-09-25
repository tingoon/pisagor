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
      <DropdownMenu.ItemGroup heading="Appearance">
        <DropdownMenu.CheckboxItem checked value="save">
          Status bar
        </DropdownMenu.CheckboxItem>
        <DropdownMenu.CheckboxItem value="notifications" :checked="false">
          Activity bar
        </DropdownMenu.CheckboxItem>
        <DropdownMenu.CheckboxItem disabled value="dark-mode" :checked="false">
          Panel
        </DropdownMenu.CheckboxItem>
      </DropdownMenu.ItemGroup>
    </DropdownMenu.Content>
  </DropdownMenu>
</template>
