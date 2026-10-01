/** @jsxImportSource solid-js */
import { Button } from "@pisagor/solid";
import { DropdownMenu } from "@pisagor/solid/dropdown-menu";
export function GroupLabel() {
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
