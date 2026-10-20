import { CheckIcon } from "@squidlab/phosphor-solid/icons";
import { Portal } from "solid-js/web";
import { Button, DropdownMenu } from "@pisagor/solid";

export function RadioGroup() {
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
            <DropdownMenu.RadioItemGroup value="dark">
              <DropdownMenu.RadioItem value="light">
                <DropdownMenu.ItemIndicator>
                  <CheckIcon />
                </DropdownMenu.ItemIndicator>
                <DropdownMenu.ItemText>Light</DropdownMenu.ItemText>
              </DropdownMenu.RadioItem>
              <DropdownMenu.RadioItem value="dark">
                <DropdownMenu.ItemIndicator>
                  <CheckIcon />
                </DropdownMenu.ItemIndicator>
                <DropdownMenu.ItemText>Dark</DropdownMenu.ItemText>
              </DropdownMenu.RadioItem>
              <DropdownMenu.RadioItem value="system">
                <DropdownMenu.ItemIndicator>
                  <CheckIcon />
                </DropdownMenu.ItemIndicator>
                <DropdownMenu.ItemText>System</DropdownMenu.ItemText>
              </DropdownMenu.RadioItem>
            </DropdownMenu.RadioItemGroup>
          </DropdownMenu.Content>
        </DropdownMenu.Positioner>
      </Portal>
    </DropdownMenu.Root>
  );
}
