import { Button } from "@pisagor/react";
import { Popover } from "..";
export function CloseBehavior() {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      <Popover closeOnInteractOutside={false}>
        <Popover.Trigger asChild>
          <Button variant="outline">Open outside click</Button>
        </Popover.Trigger>
        <Popover.Content showCloseButton>
          <Popover.Header
            description="Clicking outside does not close this popover. Press ESC to close."
            title="Stays on outside click"
          />
        </Popover.Content>
      </Popover>
      <Popover closeOnEscape={false}>
        <Popover.Trigger asChild>
          <Button variant="outline">Open escape</Button>
        </Popover.Trigger>
        <Popover.Content showCloseButton>
          <Popover.Header
            description="Pressing escape does not close this popover. Click outside to close."
            title="Escape key unavailable"
          />
        </Popover.Content>
      </Popover>
    </div>
  );
}
