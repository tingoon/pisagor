import { Button, Sheet } from "@pisagor/solid";
export function NonModal() {
  return (
    <Sheet modal={false}>
      <Sheet.Trigger
        asChild={(props) => (
          <Button {...props()} variant="outline">
            Open
          </Button>
        )}
      />
      <Sheet.Content>
        <Sheet.Header>
          <Sheet.Title>Non-modal sheet</Sheet.Title>
          <Sheet.Description>
            This is a non-modal sheet. You can interact with elements outside
            the sheet.
          </Sheet.Description>
        </Sheet.Header>
        <Sheet.Body>
          <p class="text-muted-foreground text-sm">
            Non-modal sheets allow interaction with elements outside. Focus
            trapping and scroll prevention are turned off.
          </p>
        </Sheet.Body>
        <Sheet.Footer>
          <Sheet.CloseTrigger
            asChild={(props) => (
              <Button {...props()} variant="outline">
                Close
              </Button>
            )}
          />
        </Sheet.Footer>
      </Sheet.Content>
    </Sheet>
  );
}
