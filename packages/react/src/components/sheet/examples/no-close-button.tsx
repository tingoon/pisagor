import { Button } from "@pisagor/react";
import { Sheet } from "..";
export function NoCloseButton() {
  return (
    <Sheet>
      <Sheet.Trigger asChild>
        <Button variant="outline">Open</Button>
      </Sheet.Trigger>
      <Sheet.Content showCloseButton={false}>
        <Sheet.Header>
          <Sheet.Title>No close button</Sheet.Title>
          <Sheet.Description>
            You can only close this sheet using the buttons in the footer, by pressing Escape or by
            clicking the backdrop.
          </Sheet.Description>
        </Sheet.Header>
        <Sheet.Body>
          <p className="text-muted-foreground text-sm">
            The close button in the top right corner is hidden. Use the footer buttons or press
            Escape to close.
          </p>
        </Sheet.Body>
        <Sheet.Footer>
          <Sheet.CloseTrigger asChild>
            <Button variant="outline">Cancel</Button>
          </Sheet.CloseTrigger>
          <Sheet.CloseTrigger asChild>
            <Button>Confirm</Button>
          </Sheet.CloseTrigger>
        </Sheet.Footer>
      </Sheet.Content>
    </Sheet>
  );
}
