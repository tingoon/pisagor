/** @jsxImportSource solid-js */

import { Button, DropdownMenu } from "@pisagor/solid";
import { ArrowSquareOutIcon } from "@pisagor/solid/icons";
export function Link() {
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
        <DropdownMenu.Item
          asChild={(props) => (
            <a
              {...props()}
              href="https://example.com/docs"
              rel="noopener noreferrer"
              target="_blank"
            >
              External link
              <DropdownMenu.Shortcut>
                <ArrowSquareOutIcon />
              </DropdownMenu.Shortcut>
            </a>
          )}
          value="docs"
        />
        <DropdownMenu.Item
          asChild={(props) => (
            <a {...props()} href="/docs/components">
              View docs
            </a>
          )}
          value="components"
        />
      </DropdownMenu.Content>
    </DropdownMenu>
  );
}
