import { Portal } from "solid-js/web";
import {
  CopyIcon,
  PencilIcon,
  ShareIcon,
} from "@squidlab/phosphor-solid/icons";
import { Button, DropdownMenu } from "@pisagor/solid";

export function Icons() {
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
        </DropdownMenu.Positioner>
      </Portal>
    </DropdownMenu.Root>
  );
}
