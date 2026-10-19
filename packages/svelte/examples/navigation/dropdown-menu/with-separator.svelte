<script lang="ts">
  import { Button, DropdownMenu } from "@pisagor/svelte";
</script>

<DropdownMenu classNames={{ content: "w-40" }}>
  {#snippet trigger(props)}
    <Button {...props()} variant="outline">Open</Button>
  {/snippet}

  <DropdownMenu.Item value="new">New file</DropdownMenu.Item>
  <DropdownMenu.Item value="open">Open file</DropdownMenu.Item>
  <DropdownMenu.Item value="save">Save</DropdownMenu.Item>
  <DropdownMenu.Separator />
  <DropdownMenu.Item value="copy">Copy</DropdownMenu.Item>
  <DropdownMenu.Item value="paste">Paste</DropdownMenu.Item>
  <DropdownMenu.Separator />
  <DropdownMenu.Item value="preferences">Preferences</DropdownMenu.Item>
</DropdownMenu>
