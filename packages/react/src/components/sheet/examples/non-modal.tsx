import { Button } from "@pisagor/react";
import { Sheet } from "..";
export function NonModal() {
  return (
    <Sheet modal={false}>
      <Sheet.Trigger asChild>
        <Button variant="outline">Open</Button>
      </Sheet.Trigger>
      <Sheet.Content>
        <Sheet.Header>
          <Sheet.Title>Non-modal sheet</Sheet.Title>
          <Sheet.Description>
            This is a non-modal sheet. You can interact with elements outside
            the sheet.
          </Sheet.Description>
        </Sheet.Header>
        <Sheet.Body>
          <p className="text-muted-foreground text-sm">
            Non-modal sheets allow interaction with elements outside. Focus
            trapping and scroll prevention are turned off.
          </p>
        </Sheet.Body>
        <Sheet.Footer>
          <Sheet.CloseTrigger asChild>
            <Button variant="outline">Close</Button>
          </Sheet.CloseTrigger>
        </Sheet.Footer>
      </Sheet.Content>
    </Sheet>
  );
}
