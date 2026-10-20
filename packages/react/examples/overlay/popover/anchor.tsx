import { Portal } from "@ark-ui/react";
import { Button, Input, Popover } from "@pisagor/react";

export function Anchor() {
  return (
    <div>
      <Popover.Root>
        <div className="flex items-center gap-2">
          <Popover.Trigger asChild>
            <Button variant="outline">Open</Button>
          </Popover.Trigger>
          <Popover.Anchor asChild>
            <Input className="w-full" placeholder="jane.doe@example.com" />
          </Popover.Anchor>
          <Portal>
            <Popover.Positioner>
              <Popover.Content className="w-56">
                <Popover.Header>
                  <Popover.Title>Enter your email</Popover.Title>
                  <Popover.Description>
                    We'll send you a link to reset your password.
                  </Popover.Description>
                </Popover.Header>
              </Popover.Content>
            </Popover.Positioner>
          </Portal>
        </div>
      </Popover.Root>
    </div>
  );
}
