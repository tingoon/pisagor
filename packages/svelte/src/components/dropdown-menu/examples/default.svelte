<script lang="ts">
import { DropdownMenu } from "../index";
</script>

<DropdownMenu>
  <DropdownMenu.Trigger>Open</DropdownMenu.Trigger>
  <DropdownMenu.Content>
    <DropdownMenu.Item value="profile">Profile</DropdownMenu.Item>
    <DropdownMenu.Item value="settings">Settings</DropdownMenu.Item>
    <DropdownMenu.Separator />
    <DropdownMenu.Item value="logout" variant="destructive">Log out</DropdownMenu.Item>
  </DropdownMenu.Content>
</DropdownMenu>
