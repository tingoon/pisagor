import { Portal } from "solid-js/web";
import { Button, DropdownMenu } from "@pisagor/solid";

export function WithSeparator() {
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
