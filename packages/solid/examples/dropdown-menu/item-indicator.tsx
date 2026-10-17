import source from "./item-indicator.tsx?raw";
import { Button, DropdownMenu } from "@pisagor/solid";

export function ItemIndicator() {
  return (
    <DropdownMenu>
      <DropdownMenu.Trigger
        asChild={(props) => (
          <Button {...props()} variant="outline">
            Open
          </Button>
        )}
      />
      <DropdownMenu.Content class="w-48">
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

export { source as ItemIndicatorSource };
