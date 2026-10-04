<script lang="ts">
import { Button, DropdownMenu } from "@pisagor/svelte";
import { CopyIcon, PencilIcon, ShareIcon } from "@pisagor/svelte/icons";
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
    <DropdownMenu.Item value="copy">
      <CopyIcon />
      Copy
    </DropdownMenu.Item>
    <DropdownMenu.Item value="share">
      <ShareIcon />
      Share
    </DropdownMenu.Item>
  </DropdownMenu.Content>
</DropdownMenu>
