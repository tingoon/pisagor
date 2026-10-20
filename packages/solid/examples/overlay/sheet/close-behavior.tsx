import { Button, Sheet } from "@pisagor/solid";

export function CloseBehavior() {
  return (
    <div class="flex flex-wrap justify-center gap-2">
      <Sheet
        closeOnInteractOutside={false}
        description="Clicking outside does not close this sheet. Press ESC or use the close button."
        title="Stays on outside click"
        trigger={(props) => (
          <Button {...props} variant="outline">
            No close on outside click
          </Button>
        )}
      />
      <Sheet
        closeOnEscape={false}
        description="Pressing Escape does not close this sheet. Click outside or use the close button."
        title="Escape key unavailable"
        trigger={(props) => (
          <Button {...props} variant="outline">
            No close on Escape
          </Button>
        )}
      />
    </div>
  );
}
