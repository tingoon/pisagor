<script lang="ts">
  import { Button, DropdownMenu } from "@pisagor/svelte";
</script>

<DropdownMenu classNames={{ content: "w-40" }}>
  {#snippet trigger(props)}
    <Button {...props()} variant="outline">Open</Button>
  {/snippet}

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
</DropdownMenu>
