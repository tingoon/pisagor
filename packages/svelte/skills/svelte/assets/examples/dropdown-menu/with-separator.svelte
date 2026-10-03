<script lang="ts">
import { Button } from "@pisagor/svelte";
import { DropdownMenu } from "@pisagor/svelte/dropdown-menu";
</script>

<DropdownMenu>
      <DropdownMenu.Trigger>
            <Button variant="outline">
            Open
          </Button>
          </DropdownMenu.Trigger>
      <DropdownMenu.Content class="w-40">
        <DropdownMenu.Item value="new">New file</DropdownMenu.Item>
        <DropdownMenu.Item value="open">Open file</DropdownMenu.Item>
        <DropdownMenu.Item value="save">Save</DropdownMenu.Item>
        <DropdownMenu.Separator />
        <DropdownMenu.Item value="copy">Copy</DropdownMenu.Item>
        <DropdownMenu.Item value="paste">Paste</DropdownMenu.Item>
        <DropdownMenu.Separator />
        <DropdownMenu.Item value="preferences">Preferences</DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu>
