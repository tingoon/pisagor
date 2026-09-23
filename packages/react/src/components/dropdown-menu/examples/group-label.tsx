import { Button } from "@pisagor/react";
import { DropdownMenu } from "..";
export function GroupLabel() {
  return (
    <DropdownMenu>
      <DropdownMenu.Trigger asChild>
        <Button variant="outline">Open</Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content className="w-40">
        <DropdownMenu.ItemGroup heading="Account">
          <DropdownMenu.Item value="profile">Profile</DropdownMenu.Item>
          <DropdownMenu.Item value="billing">Billing</DropdownMenu.Item>
        </DropdownMenu.ItemGroup>
        <DropdownMenu.Separator />
        <DropdownMenu.ItemGroup>
          <DropdownMenu.ItemGroupLabel>Support</DropdownMenu.ItemGroupLabel>
          <DropdownMenu.Item value="docs">Docs</DropdownMenu.Item>
          <DropdownMenu.Item value="contact">Contact</DropdownMenu.Item>
        </DropdownMenu.ItemGroup>
      </DropdownMenu.Content>
    </DropdownMenu>
  );
}
