import { GearSixIcon } from "@phosphor-icons/react";
import { Button, FloatingPanel } from "@pisagor/react";
import { useState } from "react";

export function ControlledSize() {
  const [size, setSize] = useState({ height: 200, width: 360 });

  return (
    <FloatingPanel
      onSizeChange={(details) => setSize(details.size)}
      size={size}
      classNames={{ body: "text-muted-foreground text-center text-sm" }}
      icon={<GearSixIcon />}
      title="Settings"
      trigger={<Button variant="outline">Open</Button>}
    >
      <p>
        Size: {size.width} × {size.height}.
      </p>
      <p>Use the buttons above or drag the edges to resize.</p>

      <div className="flex gap-2">
        <Button
          className="flex-1"
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
          className="flex-1"
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
