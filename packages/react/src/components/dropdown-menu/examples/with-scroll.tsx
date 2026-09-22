import { Button } from "@pisagor/react";
import { DropdownMenu } from "..";
export function WithScroll() {
  const items = Array.from({ length: 15 }, (_, i) => `Item ${i + 1}`);
  return (
    <DropdownMenu>
      <DropdownMenu.Trigger asChild>
        <Button variant="outline">Open</Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content className="max-h-60 min-w-40">
        {items.map((label, index) => (
          <DropdownMenu.Item key={label} value={`item-${index + 1}`}>
            {label}
          </DropdownMenu.Item>
        ))}
      </DropdownMenu.Content>
    </DropdownMenu>
  );
}
