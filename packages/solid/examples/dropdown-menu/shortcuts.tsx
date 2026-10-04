/** @jsxImportSource solid-js */

import { Button, DropdownMenu } from "@pisagor/solid";
import {
  CopyIcon,
  GearIcon,
  SignOutIcon,
  UserIcon,
} from "@pisagor/solid/icons";
export function Shortcuts() {
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
    </DropdownMenu>
  );
}
