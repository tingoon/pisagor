import { Button, DropdownMenu } from "@pisagor/react";

export function ItemIndicator() {
  return (
    <DropdownMenu>
      <DropdownMenu.Trigger asChild>
        <Button variant="outline">Open</Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content className="w-48">
        <DropdownMenu.CheckboxItem checked value="sync">
          <DropdownMenu.ItemText>Sync files</DropdownMenu.ItemText>
          <DropdownMenu.ItemIndicator />
        </DropdownMenu.CheckboxItem>
        <DropdownMenu.CheckboxItem
          checked={false}
          value="wipe"
          variant="destructive"
        >
          <DropdownMenu.ItemText>Wipe on sign out</DropdownMenu.ItemText>
          <DropdownMenu.ItemIndicator />
        </DropdownMenu.CheckboxItem>
      </DropdownMenu.Content>
    </DropdownMenu>
  );
}
