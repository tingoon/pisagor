/** @jsxImportSource solid-js */

import { Button } from "@pisagor/solid";
import { DropdownMenu } from "@pisagor/solid/dropdown-menu";
import { CopyIcon, PencilIcon, TrashIcon } from "@pisagor/solid/icons";
export function Destructive() {
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
        <DropdownMenu.Item value="duplicate">
          <CopyIcon />
          Duplicate
        </DropdownMenu.Item>
        <DropdownMenu.Separator />
        <DropdownMenu.Item value="delete" variant="destructive">
          <TrashIcon />
          Delete
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu>
  );
}
