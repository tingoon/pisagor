import { CheckIcon } from "@squidlab/phosphor-solid/icons";
import { Portal } from "solid-js/web";
import { Button, DropdownMenu } from "@pisagor/solid";

export function Checkboxes() {
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
