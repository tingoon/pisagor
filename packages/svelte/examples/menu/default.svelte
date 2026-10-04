<script lang="ts">
import { Menu } from "@pisagor/svelte/menu";
</script>

<Menu>
  <Menu.List>
    <Menu.Item>Profile</Menu.Item>
    <Menu.Item>Settings</Menu.Item>
    <Menu.Separator />
    <Menu.Item variant="destructive">Log out</Menu.Item>
  </Menu.List>
</Menu>
