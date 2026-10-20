import { Portal } from "@ark-ui/react";
import { CaretRightIcon } from "@phosphor-icons/react";
import { Button, DropdownMenu } from "@pisagor/react";

export function Nested() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <Button variant="outline">Open</Button>
      </DropdownMenu.Trigger>
      <Portal>
        <DropdownMenu.Positioner>
          <DropdownMenu.Content className="w-40">
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
