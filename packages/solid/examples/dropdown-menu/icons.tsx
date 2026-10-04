/** @jsxImportSource solid-js */

import { Button, DropdownMenu } from "@pisagor/solid";
import { CopyIcon, PencilIcon, ShareIcon } from "@pisagor/solid/icons";
export function Icons() {
  return (
    <DropdownMenu>
      <DropdownMenu.Trigger
        asChild={(props) => (
          <Button {...props()} variant="outline">
            Open
          </Button>
        )}
      />
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
  );
}
