import { Button } from "@pisagor/react";
import { Drawer } from "..";
export function SnapPoints() {
  return (
    <Drawer
      defaultSnapPoint={0.5}
      snapPoints={[0.25, 0.5, 1]}
      snapToSequentialPoints
    >
      <Drawer.Trigger asChild>
        <Button variant="outline">Open</Button>
      </Drawer.Trigger>
      <Drawer.Content>
        <Drawer.ContentInner>
          <Drawer.Header
            description="Drag to 25%, 50%, or 100% height. Swipe down to close."
            title="Snap points"
          />
          <Drawer.Body>
            <p className="text-muted-foreground text-sm">
              This drawer has multiple snap points. Try dragging the handle to
              quarter, half, or full height.
            </p>
          </Drawer.Body>
        </Drawer.ContentInner>
      </Drawer.Content>
    </Drawer>
  );
}
