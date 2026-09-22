import { GearIcon, SignOutIcon, UserIcon } from "@phosphor-icons/react";
import { Menu } from "..";

export function Default() {
  return (
    <div className="w-56 rounded-xl border bg-background p-1 shadow-xs/5">
      <Menu aria-label="Account">
        <Menu.List>
          <Menu.Link active href="#profile">
            <UserIcon />
            Profile
          </Menu.Link>
          <Menu.Link href="#settings">
            <GearIcon />
            Settings
          </Menu.Link>
          <Menu.Separator />
          <Menu.Item>
            <SignOutIcon />
            Sign out
            <Menu.Shortcut>⇧⌘Q</Menu.Shortcut>
          </Menu.Item>
        </Menu.List>
      </Menu>
    </div>
  );
}
