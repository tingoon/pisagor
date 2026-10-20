import { Portal } from "solid-js/web";
import {
  CopyIcon,
  GearIcon,
  SignOutIcon,
  UserIcon,
} from "@squidlab/phosphor-solid/icons";
import { Button, DropdownMenu } from "@pisagor/solid";

export function Shortcuts() {
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
