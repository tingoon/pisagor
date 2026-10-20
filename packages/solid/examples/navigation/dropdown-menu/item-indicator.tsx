import { CheckIcon } from "@squidlab/phosphor-solid/icons";
import { Portal } from "solid-js/web";
import { Button, DropdownMenu } from "@pisagor/solid";

export function ItemIndicator() {
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
          <DropdownMenu.Content class="w-48">
            <DropdownMenu.CheckboxItem checked value="sync">
              <DropdownMenu.ItemText>Sync files</DropdownMenu.ItemText>
              <DropdownMenu.ItemIndicator>
                <CheckIcon />
              </DropdownMenu.ItemIndicator>
            </DropdownMenu.CheckboxItem>
            <DropdownMenu.CheckboxItem
              checked={false}
              value="wipe"
              variant="destructive"
            >
              <DropdownMenu.ItemText>Wipe on sign out</DropdownMenu.ItemText>
              <DropdownMenu.ItemIndicator>
                <CheckIcon />
              </DropdownMenu.ItemIndicator>
            </DropdownMenu.CheckboxItem>
          </DropdownMenu.Content>
        </DropdownMenu.Positioner>
      </Portal>
    </DropdownMenu.Root>
  );
}
