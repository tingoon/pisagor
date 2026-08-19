import { Button } from "@pisagor/react/button";
import { Dialog } from "@pisagor/react/dialog";
import { Popover } from "@pisagor/react/popover";

export function PopoverDialog() {
  return (
    <Dialog>
      <Dialog.Trigger asChild>
        <Button variant="outline">Open</Button>
      </Dialog.Trigger>
      <Dialog.Content>
        <Dialog.Header
          description="Open the popover from the button below to see it layered above the dialog."
          title="Popover inside dialog"
        />
        <Dialog.Body>
          <Popover>
            <Popover.Trigger asChild>
              <Button variant="outline">Open</Button>
            </Popover.Trigger>
            <Popover.Content>
              <Popover.Header
                description="You're all caught up. Check back later for new notifications."
                title="Nested popover"
              />
            </Popover.Content>
          </Popover>
        </Dialog.Body>
        <Dialog.Footer>
          <Dialog.Close asChild>
            <Button variant="outline">Close</Button>
          </Dialog.Close>
        </Dialog.Footer>
      </Dialog.Content>
    </Dialog>
  );
}
