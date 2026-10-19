import { Button, Popover } from "@pisagor/solid";

export function CloseBehavior() {
  return (
    <div class="flex flex-wrap justify-center gap-2">
      <Popover
        closeOnInteractOutside={false}
        description="Clicking outside does not close this popover. Press ESC to close."
        showCloseButton
        title="Stays on outside click"
        trigger={(props) => (
          <Button {...props} variant="outline">
            Open outside click
          </Button>
        )}
      />
      <Popover
        closeOnEscape={false}
        description="Pressing escape does not close this popover. Click outside to close."
        showCloseButton
        title="Escape key unavailable"
        trigger={(props) => (
          <Button {...props} variant="outline">
            Open escape
          </Button>
        )}
      />
    </div>
  );
}
