import { Button } from "@pisagor/react";
import { Sheet } from "..";
export function Sides() {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      <Sheet>
        <Sheet.Trigger asChild>
          <Button variant="outline">Right</Button>
        </Sheet.Trigger>
        <Sheet.Content placement="right">
          <Sheet.Header>
            <Sheet.Title>Right placement sheet</Sheet.Title>
          </Sheet.Header>
          <Sheet.Body>
            <p className="text-muted-foreground text-sm">
              This sheet slides in from the right placement.
            </p>
          </Sheet.Body>
        </Sheet.Content>
      </Sheet>
      <Sheet>
        <Sheet.Trigger asChild>
          <Button variant="outline">Left</Button>
        </Sheet.Trigger>
        <Sheet.Content placement="left">
          <Sheet.Header>
            <Sheet.Title>Left placement sheet</Sheet.Title>
          </Sheet.Header>
          <Sheet.Body>
            <p className="text-muted-foreground text-sm">
              This sheet slides in from the left placement.
            </p>
          </Sheet.Body>
        </Sheet.Content>
      </Sheet>
      <Sheet>
        <Sheet.Trigger asChild>
          <Button variant="outline">Top</Button>
        </Sheet.Trigger>
        <Sheet.Content placement="top">
          <Sheet.Header>
            <Sheet.Title>Top placement sheet</Sheet.Title>
          </Sheet.Header>
          <Sheet.Body>
            <p className="text-muted-foreground text-sm">
              This sheet slides in from the top placement.
            </p>
          </Sheet.Body>
        </Sheet.Content>
      </Sheet>
      <Sheet>
        <Sheet.Trigger asChild>
          <Button variant="outline">Bottom</Button>
        </Sheet.Trigger>
        <Sheet.Content placement="bottom">
          <Sheet.Header>
            <Sheet.Title>Bottom placement sheet</Sheet.Title>
          </Sheet.Header>
          <Sheet.Body>
            <p className="text-muted-foreground text-sm">
              This sheet slides in from the bottom.
            </p>
          </Sheet.Body>
        </Sheet.Content>
      </Sheet>
    </div>
  );
}
