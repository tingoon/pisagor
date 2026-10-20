<script lang="ts">
  import { Button, DropdownMenu } from "@pisagor/svelte";
  import { CopyIcon, PencilIcon, TrashIcon } from "phosphor-svelte";
</script>

<DropdownMenu classNames={{ content: "w-40" }}>
  {#snippet trigger(props)}
    <Button {...props()} variant="outline">Open</Button>
  {/snippet}

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
</DropdownMenu>
