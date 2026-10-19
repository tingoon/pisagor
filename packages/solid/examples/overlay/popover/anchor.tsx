import { Portal } from "solid-js/web";
import { Button, Input, Popover } from "@pisagor/solid";

export function Anchor() {
  return (
    <div>
      <Popover.Root>
        <div class="flex items-center gap-2">
          <Popover.Trigger
            asChild={(props) => (
              <Button {...props()} variant="outline">
                Open
              </Button>
            )}
          />
          <Popover.Anchor
            asChild={(props) => (
              <Input
                {...props()}
                class="w-full"
                placeholder="jane.doe@example.com"
              />
            )}
          />
          <Portal>
            <Popover.Positioner>
              <Popover.Content class="w-56">
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
