import { Button, Popover } from "@pisagor/solid";

export function CloseButton() {
  return (
    <Popover
      classNames={{ base: "w-72" }}
      description="You're all caught up. Check back later for new notifications."
      showCloseButton
      title="Notifications"
      trigger={(props) => (
        <Button {...props} variant="outline">
          Open
        </Button>
      )}
    />
  );
}
