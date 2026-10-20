import { Portal } from "@ark-ui/react";
import { Button, DropdownMenu } from "@pisagor/react";

export function WithSeparator() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <Button variant="outline">Open</Button>
      </DropdownMenu.Trigger>
      <Portal>
        <DropdownMenu.Positioner>
          <DropdownMenu.Content className="w-40">
            <DropdownMenu.Item value="new">New file</DropdownMenu.Item>
            <DropdownMenu.Item value="open">Open file</DropdownMenu.Item>
            <DropdownMenu.Item value="save">Save</DropdownMenu.Item>
            <DropdownMenu.Separator />
            <DropdownMenu.Item value="copy">Copy</DropdownMenu.Item>
            <DropdownMenu.Item value="paste">Paste</DropdownMenu.Item>
            <DropdownMenu.Separator />
            <DropdownMenu.Item value="preferences">
              Preferences
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Positioner>
      </Portal>
    </DropdownMenu.Root>
  );
}
