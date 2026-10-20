import { Button, Sheet } from "@pisagor/react";

export function NoCloseButton() {
  return (
    <Sheet
      actions={
        <>
          <Sheet.CloseTrigger asChild>
            <Button variant="outline">Cancel</Button>
          </Sheet.CloseTrigger>
          <Sheet.CloseTrigger asChild>
            <Button>Confirm</Button>
          </Sheet.CloseTrigger>
        </>
      }
      description="You can only close this sheet using the buttons in the footer, by pressing Escape or by clicking the backdrop."
      showCloseButton={false}
      title="No close button"
      trigger={<Button variant="outline">Open</Button>}
    >
      <p className="text-muted-foreground text-sm">
        The close button in the top right corner is hidden. Use the footer
        buttons or press Escape to close.
      </p>
    </Sheet>
  );
}
