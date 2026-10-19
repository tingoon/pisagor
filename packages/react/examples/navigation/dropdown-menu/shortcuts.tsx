import { Portal } from "@ark-ui/react";
import {
  CopyIcon,
  GearIcon,
  SignOutIcon,
  UserIcon,
} from "@phosphor-icons/react";
import { Button, DropdownMenu } from "@pisagor/react";

export function Shortcuts() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <Button variant="outline">Open</Button>
      </DropdownMenu.Trigger>
      <Portal>
        <DropdownMenu.Positioner>
          <DropdownMenu.Content className="w-40">
            <DropdownMenu.Item value="profile">
              <UserIcon />
              Profile
              <DropdownMenu.Shortcut>⌘P</DropdownMenu.Shortcut>
            </DropdownMenu.Item>
            <DropdownMenu.Item value="settings">
              <GearIcon />
              Settings
              <DropdownMenu.Shortcut>⌘S</DropdownMenu.Shortcut>
            </DropdownMenu.Item>
            <DropdownMenu.Item value="copy">
              <CopyIcon />
              Copy
              <DropdownMenu.Shortcut>⌘C</DropdownMenu.Shortcut>
            </DropdownMenu.Item>
            <DropdownMenu.Separator />
            <DropdownMenu.Item value="logout">
              <SignOutIcon />
              Log out
              <DropdownMenu.Shortcut>⌘Q</DropdownMenu.Shortcut>
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Positioner>
      </Portal>
    </DropdownMenu.Root>
  );
}
