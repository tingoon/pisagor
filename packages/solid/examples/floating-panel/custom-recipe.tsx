import { floatingPanelRecipe } from "@pisagor/recipes";
import { Button, FloatingPanel } from "@pisagor/solid";
import { tv } from "tailwind-variants";

const brandFloatingPanelRecipe = tv({
  extend: floatingPanelRecipe,
  slots: {
    content: "border-emerald-500/40",
    header: "bg-emerald-500/5",
    title: "text-emerald-900 dark:text-emerald-100",
  },
  variants: {},
});

export function CustomRecipe() {
  return (
    <FloatingPanel
      defaultSize={{ height: 300, width: 360 }}
      recipe={brandFloatingPanelRecipe}
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
