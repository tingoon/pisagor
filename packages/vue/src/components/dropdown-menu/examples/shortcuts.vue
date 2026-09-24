<script lang="ts" setup>
import { PhCopy, PhGear, PhSignOut, PhUser } from "@phosphor-icons/vue";
import { Button } from "@pisagor/vue";
import { DropdownMenu } from "..";
</script>

<template>
  <DropdownMenu>
    <DropdownMenu.Trigger as-child>
      <Button variant="outline">Open</Button>
    </DropdownMenu.Trigger>
    <DropdownMenu.Content class="w-40">
      <DropdownMenu.Item value="profile">
        <PhUser />
        Profile
        <DropdownMenu.Shortcut>⌘P</DropdownMenu.Shortcut>
      </DropdownMenu.Item>
      <DropdownMenu.Item value="settings">
        <PhGear />
        Settings
        <DropdownMenu.Shortcut>⌘S</DropdownMenu.Shortcut>
      </DropdownMenu.Item>
      <DropdownMenu.Item value="copy">
        <PhCopy />
        Copy
        <DropdownMenu.Shortcut>⌘C</DropdownMenu.Shortcut>
      </DropdownMenu.Item>
      <DropdownMenu.Separator />
      <DropdownMenu.Item value="logout">
        <PhSignOut />
        Log out
        <DropdownMenu.Shortcut>⌘Q</DropdownMenu.Shortcut>
      </DropdownMenu.Item>
    </DropdownMenu.Content>
  </DropdownMenu>
</template>
