/** @jsxImportSource solid-js */
import { Button } from "@pisagor/solid";
import { Popover } from "@pisagor/solid/popover";
export function Modal() {
  return (
    <Popover modal>
      <Popover.Trigger
        asChild={(props) => (
          <Button {...props()} variant="outline">
            Open
          </Button>
        )}
      />
      <Popover.Content>
        <Popover.Header
          description="You're all caught up. Check back later for new notifications."
          title="Notifications"
        />
      </Popover.Content>
    </Popover>
  );
}
