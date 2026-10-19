import { Button, Dialog } from "@pisagor/react";

export function NoCloseButton() {
  return (
    <Dialog
      description="You can only close this dialog using the buttons in the footer, by pressing Escape or by clicking the backdrop."
      showCloseButton={false}
      title="No close button"
      trigger={<Button variant="outline">Open</Button>}
    />
  );
}
