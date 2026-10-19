import { Portal } from "@ark-ui/react";
import {
  ArrowClockwiseIcon,
  ChatCircleIcon,
  CopyIcon,
  HandIcon,
  PencilIcon,
  ShareIcon,
} from "@phosphor-icons/react";
import { Button, DropdownMenu } from "@pisagor/react";

export function QuickItem() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <Button variant="outline">Open</Button>
      </DropdownMenu.Trigger>
      <Portal>
        <DropdownMenu.Positioner>
          <DropdownMenu.Content className="w-44">
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
            <div className="flex w-full gap-1">
              <DropdownMenu.QuickItem className="min-w-0 flex-1" value="copy">
                <CopyIcon />
                Copy
              </DropdownMenu.QuickItem>
              <DropdownMenu.QuickItem className="min-w-0 flex-1" value="share">
                <ShareIcon />
                Share
              </DropdownMenu.QuickItem>
            </div>
          </DropdownMenu.Content>
        </DropdownMenu.Positioner>
      </Portal>
    </DropdownMenu.Root>
  );
}
