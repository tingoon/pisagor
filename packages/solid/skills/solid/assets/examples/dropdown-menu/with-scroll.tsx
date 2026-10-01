/** @jsxImportSource solid-js */
import { Button } from "@pisagor/solid";
import { DropdownMenu } from "@pisagor/solid/dropdown-menu";
export function WithScroll() {
  const items = Array.from({ length: 15 }, (_, i) => `Item ${i + 1}`);
  return (
    <DropdownMenu>
      <DropdownMenu.Trigger
        asChild={(props) => (
          <Button {...props()} variant="outline">
            Open
          </Button>
        )}
      />
      <DropdownMenu.Content class="max-h-60 min-w-40">
        {items.map((label, index) => (
          <DropdownMenu.Item value={`item-${index + 1}`}>
            {label}
          </DropdownMenu.Item>
        ))}
      </DropdownMenu.Content>
    </DropdownMenu>
  );
}
