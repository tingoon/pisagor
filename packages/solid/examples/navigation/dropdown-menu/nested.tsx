import { Portal } from "solid-js/web";
import { CaretRightIcon } from "@squidlab/phosphor-solid/icons";
import { Button, DropdownMenu } from "@pisagor/solid";

export function Nested() {
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
            <DropdownMenu.Item value="item-one">Item one</DropdownMenu.Item>
            <DropdownMenu.Sub>
              <DropdownMenu.TriggerItem>
                More
                <DropdownMenu.Indicator>
                  <CaretRightIcon />
                </DropdownMenu.Indicator>
              </DropdownMenu.TriggerItem>
              <Portal>
                <DropdownMenu.Positioner>
                  <DropdownMenu.Content>
                    <DropdownMenu.Item value="sub-a">
                      Sub item A
                    </DropdownMenu.Item>
                    <DropdownMenu.Item value="sub-b">
                      Sub item B
                    </DropdownMenu.Item>
                  </DropdownMenu.Content>
                </DropdownMenu.Positioner>
              </Portal>
            </DropdownMenu.Sub>
            <DropdownMenu.Item value="item-two">Item two</DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Positioner>
      </Portal>
    </DropdownMenu.Root>
  );
}
