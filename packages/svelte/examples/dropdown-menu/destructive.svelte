<script lang="ts">
import { Button, DropdownMenu } from "@pisagor/svelte";
import { CopyIcon, PencilIcon, TrashIcon } from "@pisagor/svelte/icons";
</script>

<DropdownMenu>
  <DropdownMenu.Trigger>
    <Button variant="outline"> Open </Button>
  </DropdownMenu.Trigger>
  <DropdownMenu.Content class="w-40">
    <DropdownMenu.Item value="edit">
      <PencilIcon />
      Edit
    </DropdownMenu.Item>
    <DropdownMenu.Item value="duplicate">
      <CopyIcon />
      Duplicate
    </DropdownMenu.Item>
    <DropdownMenu.Separator />
    <DropdownMenu.Item value="delete" variant="destructive">
      <TrashIcon />
      Delete
    </DropdownMenu.Item>
  </DropdownMenu.Content>
</DropdownMenu>
