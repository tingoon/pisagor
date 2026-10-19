import { Button, Dialog, Field, Input } from "@pisagor/solid";

export function InitialFocus() {
  let inputEl: HTMLInputElement | undefined;

  return (
    <Dialog
      actions={
        <>
          <Dialog.CloseTrigger
            asChild={(props) => (
              <Button {...props()} variant="outline">
                Cancel
              </Button>
            )}
          />
          <Dialog.CloseTrigger
            asChild={(props) => <Button {...props()}>Save</Button>}
          />
        </>
      }
      description="The first input will be focused when the dialog opens."
      initialFocusEl={() => inputEl ?? null}
      title="Edit profile"
      trigger={(props) => (
        <Button {...props} variant="outline">
          Open
        </Button>
      )}
    >
      <Field.Group>
        <Field>
          <Field.Label>Name</Field.Label>
          <Input
            placeholder="John Doe"
            ref={(el) => {
              inputEl = el;
            }}
          />
        </Field>
        <Field>
          <Field.Label>Email</Field.Label>
          <Input placeholder="john.doe@example.com" />
        </Field>
      </Field.Group>
    </Dialog>
  );
}
