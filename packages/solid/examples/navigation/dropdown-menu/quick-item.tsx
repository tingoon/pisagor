import { Portal } from "solid-js/web";
import {
  ArrowClockwiseIcon,
  ChatCircleIcon,
  CopyIcon,
  HandIcon,
  PencilIcon,
  ShareIcon,
} from "@squidlab/phosphor-solid/icons";
import { Button, DropdownMenu } from "@pisagor/solid";

export function QuickItem() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger
        asChild={(props) => (
          <Button {...props()} variant="outline">
            Open
          </Button>
        )}
      />
      <Portal>
        <DropdownMenu.Positioner>
          <DropdownMenu.Content class="w-44">
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
          </DropdownMenu.Content>
        </DropdownMenu.Positioner>
      </Portal>
    </DropdownMenu.Root>
  );
}
