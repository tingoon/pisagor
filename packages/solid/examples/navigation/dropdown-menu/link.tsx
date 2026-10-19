import { Portal } from "solid-js/web";
import { ArrowSquareOutIcon } from "@squidlab/phosphor-solid/icons";
import { Button, DropdownMenu } from "@pisagor/solid";

export function Link() {
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
            <DropdownMenu.Item
              value="docs"
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
            />
            <DropdownMenu.Item
              value="components"
              asChild={(props) => (
                <a {...props()} href="/docs/components">
                  View docs
                </a>
              )}
            />
          </DropdownMenu.Content>
        </DropdownMenu.Positioner>
      </Portal>
    </DropdownMenu.Root>
  );
}
