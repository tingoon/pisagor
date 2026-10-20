import { Portal } from "@ark-ui/react";
import { Button, DropdownMenu } from "@pisagor/react";

export function GroupLabel() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <Button variant="outline">Open</Button>
      </DropdownMenu.Trigger>
      <Portal>
        <DropdownMenu.Positioner>
          <DropdownMenu.Content className="w-40">
            <DropdownMenu.ItemGroup>
              <DropdownMenu.ItemGroupLabel>Account</DropdownMenu.ItemGroupLabel>
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
        </DropdownMenu.Positioner>
      </Portal>
    </DropdownMenu.Root>
  );
}
