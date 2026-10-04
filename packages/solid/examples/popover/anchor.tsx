/** @jsxImportSource solid-js */
import { Button, Input, Popover } from "@pisagor/solid";
export function Anchor() {
  return (
    <div>
      <Popover>
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
          <Popover.Content class="w-56">
            <Popover.Header
              description="We'll send you a link to reset your password."
              title="Enter your email"
            />
          </Popover.Content>
        </div>
      </Popover>
    </div>
  );
}
