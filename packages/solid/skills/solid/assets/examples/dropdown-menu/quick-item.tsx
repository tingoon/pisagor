/** @jsxImportSource solid-js */

import { Button } from "@pisagor/solid";
import { DropdownMenu } from "@pisagor/solid/dropdown-menu";
import {
  ArrowClockwiseIcon,
  ChatCircleIcon,
  CopyIcon,
  HandIcon,
  PencilIcon,
  ShareIcon,
} from "@pisagor/solid/icons";
export function QuickItem() {
  return (
    <DropdownMenu>
      <DropdownMenu.Trigger
        asChild={(props) => (
          <Button {...props()} variant="outline">
            Open
          </Button>
        )}
      />
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
  );
}
