import { Button, Sheet } from "@pisagor/react";

export function NonModal() {
  return (
    <Sheet
      actions={
        <>
          <Sheet.CloseTrigger asChild>
            <Button variant="outline">Close</Button>
          </Sheet.CloseTrigger>
        </>
      }
      description="This is a non-modal sheet. You can interact with elements outside the sheet."
      modal={false}
      title="Non-modal sheet"
      trigger={<Button variant="outline">Open</Button>}
    >
      <p className="text-muted-foreground text-sm">
        Non-modal sheets allow interaction with elements outside. Focus trapping
        and scroll prevention are turned off.
      </p>
    </Sheet>
  );
}
