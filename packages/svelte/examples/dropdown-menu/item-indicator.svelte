<script lang="ts">
import { DropdownMenu } from "@pisagor/svelte";
</script>

<DropdownMenu>
  <DropdownMenu.Trigger>Open</DropdownMenu.Trigger>
  <DropdownMenu.Content class="w-48">
    <DropdownMenu.CheckboxItem checked value="sync">
      <DropdownMenu.ItemText>Sync files</DropdownMenu.ItemText>
      <DropdownMenu.ItemIndicator />
    </DropdownMenu.CheckboxItem>
    <DropdownMenu.CheckboxItem
      checked={false}
      value="wipe"
      variant="destructive"
    >
      <DropdownMenu.ItemText>Wipe on sign out</DropdownMenu.ItemText>
      <DropdownMenu.ItemIndicator />
    </DropdownMenu.CheckboxItem>
  </DropdownMenu.Content>
</DropdownMenu>
