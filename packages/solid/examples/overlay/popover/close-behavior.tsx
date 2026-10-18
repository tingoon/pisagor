import { Button, Popover } from "@pisagor/solid";
export function CloseBehavior() {
  return (
    <div class="flex flex-wrap justify-center gap-2">
      <Popover closeOnInteractOutside={false}>
        <Popover.Trigger
          asChild={(props) => (
            <Button {...props()} variant="outline">
              Open outside click
            </Button>
          )}
        />
        <Popover.Content showCloseButton>
          <Popover.Header
            description="Clicking outside does not close this popover. Press ESC to close."
            title="Stays on outside click"
          />
        </Popover.Content>
      </Popover>
      <Popover closeOnEscape={false}>
        <Popover.Trigger
          asChild={(props) => (
            <Button {...props()} variant="outline">
              Open escape
            </Button>
          )}
        />
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
