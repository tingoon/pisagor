import { ArrowSquareOutIcon } from "@phosphor-icons/react";
import { Button } from "@pisagor/react";
import { DropdownMenu } from "..";
export function Link() {
  return (
    <DropdownMenu>
      <DropdownMenu.Trigger asChild>
        <Button variant="outline">Open</Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content className="w-40">
        <DropdownMenu.Item asChild value="docs">
          <a href="https://example.com/docs" rel="noopener noreferrer" target="_blank">
            External link
            <DropdownMenu.Shortcut>
              <ArrowSquareOutIcon />
            </DropdownMenu.Shortcut>
          </a>
        </DropdownMenu.Item>
        <DropdownMenu.Item asChild value="components">
          <a href="/docs/components">View docs</a>
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu>
  );
}
