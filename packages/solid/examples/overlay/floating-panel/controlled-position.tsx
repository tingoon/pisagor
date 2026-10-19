import {
  CaretDownIcon,
  CaretLeftIcon,
  CaretRightIcon,
  CaretUpIcon,
  GearSixIcon,
} from "@squidlab/phosphor-solid/icons";
import { Button, FloatingPanel } from "@pisagor/solid";
import { createSignal } from "solid-js";

export function ControlledPosition() {
  const [position, setPosition] = createSignal({ x: 200, y: 200 });

  return (
    <div class="flex flex-col gap-2">
      <FloatingPanel
        onPositionChange={(details) => setPosition(details.position)}
        position={position()}
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
      </FloatingPanel>
    </div>
  );
}
