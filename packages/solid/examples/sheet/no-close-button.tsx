/** @jsxImportSource solid-js */
import { Button, Sheet } from "@pisagor/solid";
export function NoCloseButton() {
  return (
    <Sheet>
      <Sheet.Trigger
        asChild={(props) => (
          <Button {...props()} variant="outline">
            Open
          </Button>
        )}
      />
      <Sheet.Content showCloseButton={false}>
        <Sheet.Header>
          <Sheet.Title>No close button</Sheet.Title>
          <Sheet.Description>
            You can only close this sheet using the buttons in the footer, by
            pressing Escape or by clicking the backdrop.
          </Sheet.Description>
        </Sheet.Header>
        <Sheet.Body>
          <p class="text-muted-foreground text-sm">
            The close button in the top right corner is hidden. Use the footer
            buttons or press Escape to close.
          </p>
        </Sheet.Body>
        <Sheet.Footer>
          <Sheet.CloseTrigger
            asChild={(props) => (
              <Button {...props()} variant="outline">
                Cancel
              </Button>
            )}
          />
          <Sheet.CloseTrigger
            asChild={(props) => <Button {...props()}>Confirm</Button>}
          />
        </Sheet.Footer>
      </Sheet.Content>
    </Sheet>
  );
}
