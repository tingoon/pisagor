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
          <DropdownMenu.ItemGroup>
            <DropdownMenu.ItemGroupLabel>Account</DropdownMenu.ItemGroupLabel>
            <DropdownMenu.Item value="profile">Profile</DropdownMenu.Item>
            <DropdownMenu.Item value="billing">Billing</DropdownMenu.Item>
          </DropdownMenu.ItemGroup>
          <DropdownMenu.Separator />
          <DropdownMenu.ItemGroup>
            <DropdownMenu.ItemGroupLabel>Support</DropdownMenu.ItemGroupLabel>
            <DropdownMenu.Item value="docs">Docs</DropdownMenu.Item>
            <DropdownMenu.Item value="contact">Contact</DropdownMenu.Item>
          </DropdownMenu.ItemGroup>
        </DropdownMenu.Content>
      </DropdownMenu.Positioner>
    </Teleport>
  </DropdownMenu.Root>
</template>
