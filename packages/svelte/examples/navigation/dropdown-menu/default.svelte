<script lang="ts">
  import { Button, DropdownMenu } from "@pisagor/svelte";
</script>

<DropdownMenu>
  {#snippet trigger(props)}
    <Button {...props()} variant="outline">Open</Button>
  {/snippet}

  <DropdownMenu.Item value="profile">Profile</DropdownMenu.Item>
  <DropdownMenu.Item value="settings">Settings</DropdownMenu.Item>
  <DropdownMenu.Separator />
  <DropdownMenu.Item value="logout" variant="destructive"
    >Log out</DropdownMenu.Item
  >
</DropdownMenu>
