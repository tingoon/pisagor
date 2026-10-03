<script lang="ts">
import { Button } from "@pisagor/svelte";
import { DropdownMenu } from "@pisagor/svelte/dropdown-menu";
import {
  ArrowClockwiseIcon,
  ChatCircleIcon,
  CopyIcon,
  HandIcon,
  PencilIcon,
  ShareIcon,
} from "@pisagor/svelte/icons";
</script>

<DropdownMenu>
      <DropdownMenu.Trigger>
            <Button variant="outline">
            Open
          </Button>
          </DropdownMenu.Trigger>
      <DropdownMenu.Content class="w-44">
        <DropdownMenu.ItemGroup heading="Actions">
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
      </DropdownMenu.Content>
    </DropdownMenu>
