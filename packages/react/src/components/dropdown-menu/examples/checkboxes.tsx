import { Button } from "@pisagor/react";
import { DropdownMenu } from "..";
export function Checkboxes() {
  return (
    <DropdownMenu>
      <DropdownMenu.Trigger asChild>
        <Button variant="outline">Open</Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content className="w-40">
        <DropdownMenu.ItemGroup heading="Appearance">
          <DropdownMenu.CheckboxItem checked value="save">
            Status bar
          </DropdownMenu.CheckboxItem>
          <DropdownMenu.CheckboxItem checked={false} value="notifications">
            Activity bar
          </DropdownMenu.CheckboxItem>
          <DropdownMenu.CheckboxItem checked={false} disabled value="dark-mode">
            Panel
          </DropdownMenu.CheckboxItem>
        </DropdownMenu.ItemGroup>
      </DropdownMenu.Content>
    </DropdownMenu>
  );
}
