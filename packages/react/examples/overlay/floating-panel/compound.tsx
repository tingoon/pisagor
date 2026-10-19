import { Portal } from "@ark-ui/react";
import { ArrowsOutIcon, MinusIcon, XIcon } from "@phosphor-icons/react";
import { Button, FloatingPanel } from "@pisagor/react";

export function Compound() {
  return (
    <FloatingPanel.Root defaultSize={{ height: 240, width: 320 }}>
      <FloatingPanel.Trigger asChild>
        <Button variant="outline">Open</Button>
      </FloatingPanel.Trigger>
      <Portal>
        <FloatingPanel.Positioner>
          <FloatingPanel.Content>
            <FloatingPanel.DragTrigger>
              <FloatingPanel.Header>
                <FloatingPanel.Title>Notes</FloatingPanel.Title>
                <FloatingPanel.Control>
                  <FloatingPanel.StageTrigger asChild stage="minimized">
                    <Button
                      aria-label="Minimize"
                      size="icon-xs"
                      variant="ghost"
                    >
                      <MinusIcon />
                    </Button>
                  </FloatingPanel.StageTrigger>
                  <FloatingPanel.StageTrigger asChild stage="maximized">
                    <Button
                      aria-label="Maximize"
                      size="icon-xs"
                      variant="ghost"
                    >
                      <ArrowsOutIcon />
                    </Button>
                  </FloatingPanel.StageTrigger>
                  <FloatingPanel.CloseTrigger asChild>
                    <Button aria-label="Close" size="icon-xs">
                      <XIcon />
                    </Button>
                  </FloatingPanel.CloseTrigger>
                </FloatingPanel.Control>
              </FloatingPanel.Header>
            </FloatingPanel.DragTrigger>
            <FloatingPanel.Body>
              <p className="text-muted-foreground text-sm">
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
