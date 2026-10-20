import { Portal } from "solid-js/web";
import {
  ArrowsOutIcon,
  MinusIcon,
  XIcon,
} from "@squidlab/phosphor-solid/icons";
import { Button, FloatingPanel } from "@pisagor/solid";

export function Compound() {
  return (
    <FloatingPanel.Root defaultSize={{ height: 240, width: 320 }}>
      <FloatingPanel.Trigger
        asChild={(props) => (
          <Button {...props()} variant="outline">
            Open
          </Button>
        )}
      />
      <Portal>
        <FloatingPanel.Positioner>
          <FloatingPanel.Content>
            <FloatingPanel.DragTrigger>
              <FloatingPanel.Header>
                <FloatingPanel.Title>Notes</FloatingPanel.Title>
                <FloatingPanel.Control>
                  <FloatingPanel.StageTrigger
                    stage="minimized"
                    asChild={(props) => (
                      <Button
                        {...props()}
                        aria-label="Minimize"
                        size="icon-xs"
                        variant="ghost"
                      >
                        <MinusIcon />
                      </Button>
                    )}
                  />
                  <FloatingPanel.StageTrigger
                    stage="maximized"
                    asChild={(props) => (
                      <Button
                        {...props()}
                        aria-label="Maximize"
                        size="icon-xs"
                        variant="ghost"
                      >
                        <ArrowsOutIcon />
                      </Button>
                    )}
                  />
                  <FloatingPanel.CloseTrigger
                    asChild={(props) => (
                      <Button {...props()} aria-label="Close" size="icon-xs">
                        <XIcon />
                      </Button>
                    )}
                  />
                </FloatingPanel.Control>
              </FloatingPanel.Header>
            </FloatingPanel.DragTrigger>
            <FloatingPanel.Body>
              <p class="text-muted-foreground text-sm">
                Built from parts. Drag the header to move the panel.
              </p>
            </FloatingPanel.Body>
            <FloatingPanel.ResizeTrigger axis="se" />
          </FloatingPanel.Content>
        </FloatingPanel.Positioner>
      </Portal>
    </FloatingPanel.Root>
  );
}
