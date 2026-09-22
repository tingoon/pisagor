import { CopyIcon, PencilIcon, TrashIcon } from "@phosphor-icons/react";
import { Button } from "@pisagor/react";
import { DropdownMenu } from "..";
export function Destructive() {
  return (
    <DropdownMenu>
      <DropdownMenu.Trigger asChild>
        <Button variant="outline">Open</Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content className="w-40">
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
