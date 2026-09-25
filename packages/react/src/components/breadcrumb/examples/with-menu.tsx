import { Button, DropdownMenu } from "@pisagor/react";
import { Breadcrumb } from "..";
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
            <DropdownMenu.Trigger asChild>
              <Button
                aria-label="Open menu to view more breadcrumb items"
                size="icon-sm"
                variant="ghost"
              >
                <Breadcrumb.Ellipsis />
              </Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content className="w-40">
              <DropdownMenu.Item asChild value="docs">
                <a href="https://example.com/documentation">Documentation</a>
              </DropdownMenu.Item>
              <DropdownMenu.Item asChild value="components">
                <a href="https://example.com/components">Components</a>
              </DropdownMenu.Item>
              <DropdownMenu.Item asChild value="hooks">
                <a href="https://example.com/hooks">Hooks</a>
              </DropdownMenu.Item>
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
