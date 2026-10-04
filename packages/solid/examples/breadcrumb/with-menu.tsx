/** @jsxImportSource solid-js */
import { Button, DropdownMenu } from "@pisagor/solid";
import { Breadcrumb } from "@pisagor/solid/breadcrumb";
export function WithMenu() {
  return (
    <Breadcrumb.Root>
      <Breadcrumb.List>
        <Breadcrumb.Item>
          <Breadcrumb.Link href="https://example.com/">Home</Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Separator />
        <Breadcrumb.Item>
          <DropdownMenu positioning={{ placement: "bottom-start" }}>
            <DropdownMenu.Trigger
              asChild={(props) => (
                <Button
                  {...props()}
                  aria-label="Open menu to view more breadcrumb items"
                  size="icon-sm"
                  variant="ghost"
                >
                  <Breadcrumb.Ellipsis />
                </Button>
              )}
            />
            <DropdownMenu.Content class="w-40">
              <DropdownMenu.Item
                asChild={(props) => (
                  <a {...props()} href="https://example.com/documentation">
                    Documentation
                  </a>
                )}
                value="docs"
              />
              <DropdownMenu.Item
                asChild={(props) => (
                  <a {...props()} href="https://example.com/components">
                    Components
                  </a>
                )}
                value="components"
              />
              <DropdownMenu.Item
                asChild={(props) => (
                  <a {...props()} href="https://example.com/hooks">
                    Hooks
                  </a>
                )}
                value="hooks"
              />
            </DropdownMenu.Content>
          </DropdownMenu>
        </Breadcrumb.Item>
        <Breadcrumb.Separator />
        <Breadcrumb.Item>
          <Breadcrumb.Link href="https://example.com/">
            Products
          </Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Separator />
        <Breadcrumb.Item>
          <Breadcrumb.Page>Breadcrumb</Breadcrumb.Page>
        </Breadcrumb.Item>
      </Breadcrumb.List>
    </Breadcrumb.Root>
  );
}
