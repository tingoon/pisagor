<script lang="ts">
  import { Button, DropdownMenu } from "@pisagor/svelte";
  import { CheckIcon } from "phosphor-svelte";
</script>

<DropdownMenu classNames={{ content: "w-48" }}>
  {#snippet trigger(props)}
    <Button {...props()} variant="outline">Open</Button>
  {/snippet}

  <DropdownMenu.CheckboxItem checked value="sync">
    <DropdownMenu.ItemText>Sync files</DropdownMenu.ItemText>
    <DropdownMenu.ItemIndicator>
      <CheckIcon />
    </DropdownMenu.ItemIndicator>
  </DropdownMenu.CheckboxItem>
  <DropdownMenu.CheckboxItem checked={false} value="wipe" variant="destructive">
    <DropdownMenu.ItemText>Wipe on sign out</DropdownMenu.ItemText>
    <DropdownMenu.ItemIndicator>
      <CheckIcon />
    </DropdownMenu.ItemIndicator>
  </DropdownMenu.CheckboxItem>
</DropdownMenu>
