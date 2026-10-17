import { Button, DropdownMenu } from "@pisagor/solid";
export function RadioGroup() {
  return (
    <DropdownMenu>
      <DropdownMenu.Trigger
        asChild={(props) => (
          <Button {...props()} variant="outline">
            Open
          </Button>
        )}
      />
      <DropdownMenu.Content class="w-40">
        <DropdownMenu.RadioItemGroup value="dark">
          <DropdownMenu.RadioItem value="light">Light</DropdownMenu.RadioItem>
          <DropdownMenu.RadioItem value="dark">Dark</DropdownMenu.RadioItem>
          <DropdownMenu.RadioItem value="system">System</DropdownMenu.RadioItem>
        </DropdownMenu.RadioItemGroup>
      </DropdownMenu.Content>
    </DropdownMenu>
  );
}
