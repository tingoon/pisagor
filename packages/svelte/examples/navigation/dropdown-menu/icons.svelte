<script lang="ts">
  import { Button, DropdownMenu } from "@pisagor/svelte";
  import { CopyIcon, PencilIcon, ShareIcon } from "phosphor-svelte";
</script>

<DropdownMenu classNames={{ content: "w-40" }}>
  {#snippet trigger(props)}
    <Button {...props()} variant="outline">Open</Button>
  {/snippet}

  <DropdownMenu.Item value="edit">
    <PencilIcon />
    Edit
  </DropdownMenu.Item>
  <DropdownMenu.Item value="copy">
    <CopyIcon />
    Copy
  </DropdownMenu.Item>
  <DropdownMenu.Item value="share">
    <ShareIcon />
    Share
  </DropdownMenu.Item>
</DropdownMenu>
