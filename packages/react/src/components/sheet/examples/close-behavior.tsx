import { Button } from "@pisagor/react";
import { Sheet } from "..";
export function CloseBehavior() {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      <Sheet closeOnInteractOutside={false}>
        <Sheet.Trigger asChild>
          <Button variant="outline">No close on outside click</Button>
        </Sheet.Trigger>
        <Sheet.Content>
          <Sheet.Header>
            <Sheet.Title>Stays on outside click</Sheet.Title>
            <Sheet.Description>
              Clicking outside does not close this sheet. Press ESC or use the close button.
            </Sheet.Description>
          </Sheet.Header>
        </Sheet.Content>
      </Sheet>
      <Sheet closeOnEscape={false}>
        <Sheet.Trigger asChild>
          <Button variant="outline">No close on Escape</Button>
        </Sheet.Trigger>
        <Sheet.Content>
          <Sheet.Header>
            <Sheet.Title>Escape key unavailable</Sheet.Title>
            <Sheet.Description>
              Pressing Escape does not close this sheet. Click outside or use the close button.
            </Sheet.Description>
          </Sheet.Header>
        </Sheet.Content>
      </Sheet>
    </div>
  );
}
