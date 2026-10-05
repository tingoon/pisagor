import { Button, FloatingPanel } from "@pisagor/solid";
import {
  CaretDownIcon,
  CaretLeftIcon,
  CaretRightIcon,
  CaretUpIcon,
  GearSixIcon,
  XIcon,
} from "@pisagor/solid/icons";
import { createSignal } from "solid-js";
export function ControlledPosition() {
  const [position, setPosition] = createSignal({ x: 200, y: 200 });

  return (
    <div class="flex flex-col gap-2">
      <FloatingPanel
        onPositionChange={(details) => setPosition(details.position)}
        position={position()}
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
              Position: ({position().x}, {position().y}).
            </p>
            <p>Use the buttons to move the panel.</p>

            <div class="flex flex-col items-center gap-1">
              <div>
                <Button
                  aria-label="Move up"
                  onClick={() =>
                    setPosition((prev) => ({ ...prev, y: prev.y - 20 }))
                  }
                  size="icon-md"
                  variant="outline"
                >
                  <CaretUpIcon aria-hidden />
                </Button>
              </div>
              <div class="flex gap-1">
                <Button
                  aria-label="Move left"
                  onClick={() =>
                    setPosition((prev) => ({ ...prev, x: prev.x - 20 }))
                  }
                  size="icon-md"
                  variant="outline"
                >
                  <CaretLeftIcon aria-hidden />
                </Button>
                <Button
                  aria-label="Move down"
                  onClick={() =>
                    setPosition((prev) => ({ ...prev, y: prev.y + 20 }))
                  }
                  size="icon-md"
                  variant="outline"
                >
                  <CaretDownIcon aria-hidden />
                </Button>
                <Button
                  aria-label="Move right"
                  onClick={() =>
                    setPosition((prev) => ({ ...prev, x: prev.x + 20 }))
                  }
                  size="icon-md"
                  variant="outline"
                >
                  <CaretRightIcon aria-hidden />
                </Button>
              </div>
            </div>
          </FloatingPanel.Body>
        </FloatingPanel.Content>
      </FloatingPanel>
    </div>
  );
}
