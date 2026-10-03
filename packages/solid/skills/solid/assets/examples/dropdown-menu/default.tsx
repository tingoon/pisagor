/** @jsxImportSource solid-js */
import { Button } from "@pisagor/solid/button";
import { DropdownMenu } from "@pisagor/solid/dropdown-menu";

export function Default() {
  return (
    <DropdownMenu>
      <DropdownMenu.Trigger
        asChild={(props) => (
          <Button {...props()} variant="outline">
            Open
          </Button>
        )}
      />
      <DropdownMenu.Content>
        <DropdownMenu.Item value="profile">Profile</DropdownMenu.Item>
        <DropdownMenu.Item value="settings">Settings</DropdownMenu.Item>
        <DropdownMenu.Separator />
        <DropdownMenu.Item value="logout" variant="destructive">
          Log out
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu>
  );
}
