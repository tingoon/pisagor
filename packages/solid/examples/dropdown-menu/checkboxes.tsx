import { Button, DropdownMenu } from "@pisagor/solid";
export function Checkboxes() {
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
        <DropdownMenu.ItemGroup heading="Appearance">
          <DropdownMenu.CheckboxItem checked value="save">
            Status bar
          </DropdownMenu.CheckboxItem>
          <DropdownMenu.CheckboxItem checked={false} value="notifications">
            Activity bar
          </DropdownMenu.CheckboxItem>
          <DropdownMenu.CheckboxItem checked={false} disabled value="dark-mode">
            Panel
          </DropdownMenu.CheckboxItem>
        </DropdownMenu.ItemGroup>
      </DropdownMenu.Content>
    </DropdownMenu>
  );
}
