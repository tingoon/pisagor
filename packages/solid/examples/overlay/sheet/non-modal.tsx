import { Button, Sheet } from "@pisagor/solid";

export function NonModal() {
  return (
    <Sheet
      actions={
        <>
          <Sheet.CloseTrigger
            asChild={(props) => (
              <Button {...props()} variant="outline">
                Close
              </Button>
            )}
          />
        </>
      }
      description="This is a non-modal sheet. You can interact with elements outside the sheet."
      modal={false}
      title="Non-modal sheet"
      trigger={(props) => (
        <Button {...props} variant="outline">
          Open
        </Button>
      )}
    >
      <p class="text-muted-foreground text-sm">
        Non-modal sheets allow interaction with elements outside. Focus trapping
        and scroll prevention are turned off.
      </p>
    </Sheet>
  );
}
