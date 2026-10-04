/** @jsxImportSource solid-js */
import { Button } from "@pisagor/solid";
import { Popover } from "@pisagor/solid/popover";
export function Nested() {
  return (
    <Popover>
      <Popover.Trigger
        asChild={(props) => (
          <Button {...props()} variant="outline">
            Open
          </Button>
        )}
      />
      <Popover.Content>
        <Popover.Header
          description="Check your notifications."
          title="Notifications"
        />
        <Popover.Body>
          <Popover>
            <Popover.Trigger
              asChild={(props) => (
                <Button {...props()} size="sm" variant="outline">
                  Open nested
                </Button>
              )}
            />
            <Popover.Content class="w-56">
              <Popover.Header
                description="You're all caught up. Check back later for new notifications."
                title="Nested popover"
              />
            </Popover.Content>
          </Popover>
        </Popover.Body>
      </Popover.Content>
    </Popover>
  );
}
