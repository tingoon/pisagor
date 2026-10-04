<script lang="ts">
import { Button, DropdownMenu } from "@pisagor/svelte";
import {
  CopyIcon,
  GearIcon,
  SignOutIcon,
  UserIcon,
} from "@pisagor/svelte/icons";
</script>

<DropdownMenu>
  <DropdownMenu.Trigger>
    <Button variant="outline"> Open </Button>
  </DropdownMenu.Trigger>
  <DropdownMenu.Content class="w-40">
    <DropdownMenu.Item value="profile">
      <UserIcon />
      Profile
      <DropdownMenu.Shortcut>⌘P</DropdownMenu.Shortcut>
    </DropdownMenu.Item>
    <DropdownMenu.Item value="settings">
      <GearIcon />
      Settings
      <DropdownMenu.Shortcut>⌘S</DropdownMenu.Shortcut>
    </DropdownMenu.Item>
    <DropdownMenu.Item value="copy">
      <CopyIcon />
      Copy
      <DropdownMenu.Shortcut>⌘C</DropdownMenu.Shortcut>
    </DropdownMenu.Item>
    <DropdownMenu.Separator />
    <DropdownMenu.Item value="logout">
      <SignOutIcon />
      Log out
      <DropdownMenu.Shortcut>⌘Q</DropdownMenu.Shortcut>
    </DropdownMenu.Item>
  </DropdownMenu.Content>
</DropdownMenu>
