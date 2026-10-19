import { Button, Dialog } from "@pisagor/solid";

export function NoCloseButton() {
  return (
    <Dialog
      description="You can only close this dialog using the buttons in the footer, by pressing Escape or by clicking the backdrop."
      showCloseButton={false}
      title="No close button"
      trigger={(props) => (
        <Button {...props} variant="outline">
          Open
        </Button>
      )}
    />
  );
}
