import { Button, Drawer } from "@pisagor/solid";

export function SnapPoints() {
  return (
    <Drawer
      defaultSnapPoint={0.5}
      description="Drag to 25%, 50%, or 100% height. Swipe down to close."
      snapPoints={[0.25, 0.5, 1]}
      snapToSequentialPoints
      title="Snap points"
      trigger={(props) => (
        <Button {...props} variant="outline">
          Open
        </Button>
      )}
    >
      <p class="text-muted-foreground text-sm">
        This drawer has multiple snap points. Try dragging the handle to
        quarter, half, or full height.
      </p>
    </Drawer>
  );
}
