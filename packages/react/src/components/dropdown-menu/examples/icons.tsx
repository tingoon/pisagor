import { CopyIcon, PencilIcon, ShareIcon } from "@phosphor-icons/react";
import { Button } from "@pisagor/react";
import { DropdownMenu } from "..";
export function Icons() {
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
