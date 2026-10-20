<script lang="ts">
  import { Button, DropdownMenu } from "@pisagor/svelte";
  import {
    ArrowClockwiseIcon,
    ChatCircleIcon,
    CopyIcon,
    HandIcon,
    PencilIcon,
    ShareIcon,
  } from "phosphor-svelte";
</script>

<DropdownMenu classNames={{ content: "w-44" }}>
  {#snippet trigger(props)}
    <Button {...props()} variant="outline">Open</Button>
  {/snippet}

  <DropdownMenu.ItemGroup>
    <DropdownMenu.ItemGroupLabel>Actions</DropdownMenu.ItemGroupLabel>
    <DropdownMenu.Item value="edit">
      <PencilIcon />
      Edit
    </DropdownMenu.Item>
    <DropdownMenu.Item value="add-action">
      <ArrowClockwiseIcon />
      Add Action
    </DropdownMenu.Item>
    <DropdownMenu.Item value="key-point">
      <HandIcon />
      Key Point
    </DropdownMenu.Item>
    <DropdownMenu.Item value="comment">
      <ChatCircleIcon />
      Comment
    </DropdownMenu.Item>
  </DropdownMenu.ItemGroup>
  <DropdownMenu.Separator />
  <div class="flex w-full gap-1">
    <DropdownMenu.QuickItem class="min-w-0 flex-1" value="copy">
      <CopyIcon />
      Copy
    </DropdownMenu.QuickItem>
    <DropdownMenu.QuickItem class="min-w-0 flex-1" value="share">
      <ShareIcon />
      Share
    </DropdownMenu.QuickItem>
  </div>
</DropdownMenu>
