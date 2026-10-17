import source from "./modal.tsx?raw";
import { Button, Popover } from "@pisagor/solid";
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

export { source as ModalSource };
