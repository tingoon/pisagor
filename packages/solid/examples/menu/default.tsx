/** @jsxImportSource solid-js */
import { Menu } from "@pisagor/solid";

export function Default() {
  return (
    <Menu>
      <Menu.List>
        <Menu.Item>Profile</Menu.Item>
        <Menu.Item>Settings</Menu.Item>
        <Menu.Separator />
        <Menu.Item variant="destructive">Log out</Menu.Item>
      </Menu.List>
    </Menu>
  );
}
