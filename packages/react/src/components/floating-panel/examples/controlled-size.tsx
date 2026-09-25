import { GearSixIcon, XIcon } from "@phosphor-icons/react";
import { Button } from "@pisagor/react";
import { useState } from "react";
import { FloatingPanel } from "..";
export function ControlledSize() {
  const [size, setSize] = useState({ height: 200, width: 360 });

  return (
    <FloatingPanel
      onSizeChange={(details) => setSize(details.size)}
      size={size}
    >
      <FloatingPanel.Trigger asChild>
        <Button variant="outline">Open</Button>
      </FloatingPanel.Trigger>
      <FloatingPanel.Content>
        <FloatingPanel.Header>
          <GearSixIcon />
          <FloatingPanel.Title>Settings</FloatingPanel.Title>
          <FloatingPanel.Control>
            <FloatingPanel.Minimize />
            <FloatingPanel.Maximize />
            <FloatingPanel.Restore />
            <FloatingPanel.CloseTrigger asChild>
              <Button aria-label="Close" size="icon-sm">
                <XIcon aria-hidden />
              </Button>
            </FloatingPanel.CloseTrigger>
          </FloatingPanel.Control>
        </FloatingPanel.Header>
        <FloatingPanel.Body className="text-center text-muted-foreground text-sm">
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
        </FloatingPanel.Body>
      </FloatingPanel.Content>
    </FloatingPanel>
  );
}
