import { Button } from "@pisagor/react";
import { DropdownMenu } from "..";
export function WithSeparator() {
  return (
    <DropdownMenu>
      <DropdownMenu.Trigger asChild>
        <Button variant="outline">Open</Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content className="w-40">
        <DropdownMenu.Item value="new">New file</DropdownMenu.Item>
        <DropdownMenu.Item value="open">Open file</DropdownMenu.Item>
        <DropdownMenu.Item value="save">Save</DropdownMenu.Item>
        <DropdownMenu.Separator />
        <DropdownMenu.Item value="copy">Copy</DropdownMenu.Item>
        <DropdownMenu.Item value="paste">Paste</DropdownMenu.Item>
        <DropdownMenu.Separator />
        <DropdownMenu.Item value="preferences">Preferences</DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu>
  );
}
