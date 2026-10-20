import { Button, Drawer } from "@pisagor/react";

export function SnapPoints() {
  return (
    <Drawer
      defaultSnapPoint={0.5}
      description="Drag to 25%, 50%, or 100% height. Swipe down to close."
      snapPoints={[0.25, 0.5, 1]}
      snapToSequentialPoints
      title="Snap points"
      trigger={<Button variant="outline">Open</Button>}
    >
      <p className="text-muted-foreground text-sm">
        This drawer has multiple snap points. Try dragging the handle to
        quarter, half, or full height.
      </p>
    </Drawer>
  );
}
