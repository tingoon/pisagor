import { CaretRightIcon, DotsThreeIcon } from "@squidlab/phosphor-solid/icons";
import { Portal } from "solid-js/web";
import { Breadcrumb, Button, DropdownMenu } from "@pisagor/solid";

export function WithMenu() {
  return (
    <Breadcrumb.Root>
      <Breadcrumb.List>
        <Breadcrumb.Item>
          <Breadcrumb.Link href="https://example.com/">Home</Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Separator>
          <CaretRightIcon />
        </Breadcrumb.Separator>
        <Breadcrumb.Item>
          <DropdownMenu.Root positioning={{ placement: "bottom-start" }}>
            <DropdownMenu.Trigger
              asChild={(props) => (
                <Button
                  {...props()}
                  aria-label="Open menu to view more breadcrumb items"
                  size="icon-sm"
                  variant="ghost"
                >
                  <Breadcrumb.Ellipsis>
                    <DotsThreeIcon aria-hidden />
                  </Breadcrumb.Ellipsis>
                </Button>
              )}
            />
            <Portal>
              <DropdownMenu.Positioner>
                <DropdownMenu.Content class="w-40">
                  <DropdownMenu.Item
                    value="docs"
                    asChild={(props) => (
                      <a {...props()} href="https://example.com/documentation">
                        Documentation
                      </a>
                    )}
                  />
                  <DropdownMenu.Item
                    value="components"
                    asChild={(props) => (
                      <a {...props()} href="https://example.com/components">
                        Components
                      </a>
                    )}
                  />
                  <DropdownMenu.Item
                    value="hooks"
                    asChild={(props) => (
                      <a {...props()} href="https://example.com/hooks">
                        Hooks
                      </a>
                    )}
                  />
                </DropdownMenu.Content>
              </DropdownMenu.Positioner>
            </Portal>
          </DropdownMenu.Root>
        </Breadcrumb.Item>
        <Breadcrumb.Separator>
          <CaretRightIcon />
        </Breadcrumb.Separator>
        <Breadcrumb.Item>
          <Breadcrumb.Link href="https://example.com/">
            Products
          </Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Separator>
          <CaretRightIcon />
        </Breadcrumb.Separator>
        <Breadcrumb.Item>
          <Breadcrumb.Page>Breadcrumb</Breadcrumb.Page>
        </Breadcrumb.Item>
      </Breadcrumb.List>
    </Breadcrumb.Root>
  );
}
