import { Button, Popover } from "@pisagor/solid";
export function CloseButton() {
  return (
    <Popover>
      <Popover.Trigger
        asChild={(props) => (
          <Button {...props()} variant="outline">
            Open
          </Button>
        )}
      />
      <Popover.Content class="w-72" showCloseButton>
        <Popover.Header
          description="You're all caught up. Check back later for new notifications."
          title="Notifications"
        />
      </Popover.Content>
    </Popover>
  );
}
