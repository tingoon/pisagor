import { Portal } from "solid-js/web";
import { Button, DropdownMenu } from "@pisagor/solid";

export function WithScroll() {
  const items = Array.from({ length: 15 }, (_, i) => `Item ${i + 1}`);

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
          <DropdownMenu.Content class="max-h-60 min-w-40">
            {items.map((label, index) => (
              <DropdownMenu.Item value={`item-${index + 1}`}>
                {label}
              </DropdownMenu.Item>
            ))}
          </DropdownMenu.Content>
        </DropdownMenu.Positioner>
      </Portal>
    </DropdownMenu.Root>
  );
}
