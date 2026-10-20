import { Portal } from "@ark-ui/react";
import { CopyIcon, PencilIcon, ShareIcon } from "@phosphor-icons/react";
import { Button, DropdownMenu } from "@pisagor/react";

export function Icons() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <Button variant="outline">Open</Button>
      </DropdownMenu.Trigger>
      <Portal>
        <DropdownMenu.Positioner>
          <DropdownMenu.Content className="w-40">
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
        </DropdownMenu.Positioner>
      </Portal>
    </DropdownMenu.Root>
  );
}
