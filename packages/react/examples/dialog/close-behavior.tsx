import { Button, Dialog } from "@pisagor/react";

export function CloseBehavior() {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      <Dialog
        closeOnInteractOutside={false}
        description="Clicking outside does not close this dialog. Press ESC or use the button to close."
        title="Stays on outside click"
        trigger={<Button variant="outline">No close on outside click</Button>}
      />
      <Dialog
        closeOnEscape={false}
        description="Pressing Escape does not close this dialog. Click outside or use the close button."
        title="Escape key unavailable"
        trigger={<Button variant="outline">No close on Escape</Button>}
      />
    </div>
  );
}
