import { GearSixIcon } from "@squidlab/phosphor-solid/icons";
import { Button, FloatingPanel } from "@pisagor/solid";
import { createSignal } from "solid-js";

export function ControlledSize() {
  const [size, setSize] = createSignal({ height: 200, width: 360 });

  return (
    <FloatingPanel
      onSizeChange={(details) => setSize(details.size)}
      size={size()}
      classNames={{ body: "text-muted-foreground text-center text-sm" }}
      icon={<GearSixIcon />}
      title="Settings"
      trigger={(props) => (
        <Button {...props} variant="outline">
          Open
        </Button>
      )}
    >
      <p>
        Size: {size().width} × {size().height}.
      </p>
      <p>Use the buttons above or drag the edges to resize.</p>

      <div class="flex gap-2">
        <Button
          class="flex-1"
          onClick={() =>
            setSize((prev) => ({
              ...prev,
              height: prev.height - 40,
              width: prev.width - 50,
            }))
          }
          variant="outline"
        >
          Shrink
        </Button>
        <Button
          class="flex-1"
          onClick={() =>
            setSize((prev) => ({
              ...prev,
              height: prev.height + 40,
              width: prev.width + 50,
            }))
          }
          variant="outline"
        >
          Grow
        </Button>
      </div>
    </FloatingPanel>
  );
}
