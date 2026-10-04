/** @jsxImportSource solid-js */

import { Button, FloatingPanel } from "@pisagor/solid";
import { GearSixIcon, XIcon } from "@pisagor/solid/icons";
import { createSignal } from "solid-js";
export function ControlledSize() {
  const [size, setSize] = createSignal({ height: 200, width: 360 });

  return (
    <FloatingPanel
      onSizeChange={(details) => setSize(details.size)}
      size={size()}
    >
      <FloatingPanel.Trigger
        asChild={(props) => (
          <Button {...props()} variant="outline">
            Open
          </Button>
        )}
      />
      <FloatingPanel.Content>
        <FloatingPanel.Header>
          <GearSixIcon />
          <FloatingPanel.Title>Settings</FloatingPanel.Title>
          <FloatingPanel.Control>
            <FloatingPanel.Minimize />
            <FloatingPanel.Maximize />
            <FloatingPanel.Restore />
            <FloatingPanel.CloseTrigger
              asChild={(props) => (
                <Button {...props()} aria-label="Close" size="icon-sm">
                  <XIcon aria-hidden />
                </Button>
              )}
            />
          </FloatingPanel.Control>
        </FloatingPanel.Header>
        <FloatingPanel.Body class="text-center text-muted-foreground text-sm">
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
        </FloatingPanel.Body>
      </FloatingPanel.Content>
    </FloatingPanel>
  );
}
