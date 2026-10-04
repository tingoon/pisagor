/** @jsxImportSource solid-js */
import { Button, DropdownMenu } from "@pisagor/solid";
export function Nested() {
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
        <DropdownMenu.Item value="item-one">Item one</DropdownMenu.Item>
        <DropdownMenu.Sub>
          <DropdownMenu.TriggerItem>More</DropdownMenu.TriggerItem>
          <DropdownMenu.SubContent>
            <DropdownMenu.Item value="sub-a">Sub item A</DropdownMenu.Item>
            <DropdownMenu.Item value="sub-b">Sub item B</DropdownMenu.Item>
          </DropdownMenu.SubContent>
        </DropdownMenu.Sub>
        <DropdownMenu.Item value="item-two">Item two</DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu>
  );
}
