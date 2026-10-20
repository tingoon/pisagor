import { CheckIcon } from "@phosphor-icons/react";
import { Portal } from "@ark-ui/react";
import { Button, DropdownMenu } from "@pisagor/react";

export function RadioGroup() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <Button variant="outline">Open</Button>
      </DropdownMenu.Trigger>
      <Portal>
        <DropdownMenu.Positioner>
          <DropdownMenu.Content className="w-40">
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
