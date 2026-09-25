import { Button } from "../../button";
import { FloatingPanel } from "../index";

export function Default() {
  return (
    <FloatingPanel defaultSize={{ height: 300, width: 360 }}>
      <FloatingPanel.Trigger
        asChild={(props) => (
          <Button {...props()} variant="outline">
            Open
          </Button>
        )}
      />
      <FloatingPanel.Content>
        <FloatingPanel.Header>
          <FloatingPanel.Title>Settings</FloatingPanel.Title>
          <FloatingPanel.Control>
            <FloatingPanel.Minimize />
            <FloatingPanel.Maximize />
            <FloatingPanel.Restore />
            <FloatingPanel.CloseTrigger
              asChild={(props) => (
                <Button {...props()} aria-label="Close" size="icon-xs">
                  ×
                </Button>
              )}
            />
          </FloatingPanel.Control>
        </FloatingPanel.Header>
        <FloatingPanel.Body>Panel body</FloatingPanel.Body>
      </FloatingPanel.Content>
    </FloatingPanel>
  );
}
