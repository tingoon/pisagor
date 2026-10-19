import { CheckIcon } from "@phosphor-icons/react";
import { Portal } from "@ark-ui/react";
import { Button, DropdownMenu } from "@pisagor/react";

export function Checkboxes() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <Button variant="outline">Open</Button>
      </DropdownMenu.Trigger>
      <Portal>
        <DropdownMenu.Positioner>
          <DropdownMenu.Content className="w-40">
            <DropdownMenu.ItemGroup>
              <DropdownMenu.ItemGroupLabel>
                Appearance
              </DropdownMenu.ItemGroupLabel>
              <DropdownMenu.CheckboxItem checked value="save">
                <DropdownMenu.ItemIndicator>
                  <CheckIcon />
                </DropdownMenu.ItemIndicator>
                <DropdownMenu.ItemText>Status bar</DropdownMenu.ItemText>
              </DropdownMenu.CheckboxItem>
              <DropdownMenu.CheckboxItem checked={false} value="notifications">
                <DropdownMenu.ItemIndicator>
                  <CheckIcon />
                </DropdownMenu.ItemIndicator>
                <DropdownMenu.ItemText>Activity bar</DropdownMenu.ItemText>
              </DropdownMenu.CheckboxItem>
              <DropdownMenu.CheckboxItem
                checked={false}
                disabled
                value="dark-mode"
              >
                <DropdownMenu.ItemIndicator>
                  <CheckIcon />
                </DropdownMenu.ItemIndicator>
                <DropdownMenu.ItemText>Panel</DropdownMenu.ItemText>
              </DropdownMenu.CheckboxItem>
            </DropdownMenu.ItemGroup>
          </DropdownMenu.Content>
        </DropdownMenu.Positioner>
      </Portal>
    </DropdownMenu.Root>
  );
}
