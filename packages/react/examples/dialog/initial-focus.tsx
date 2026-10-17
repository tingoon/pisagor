import { Button, Dialog, Field, Input } from "@pisagor/react";
import { useRef } from "react";

export function InitialFocus() {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <Dialog
      actions={
        <>
          <Dialog.CloseTrigger asChild>
            <Button variant="outline">Cancel</Button>
          </Dialog.CloseTrigger>
          <Dialog.CloseTrigger asChild>
            <Button>Save</Button>
          </Dialog.CloseTrigger>
        </>
      }
      description="The first input will be focused when the dialog opens."
      initialFocusEl={() => inputRef.current}
      title="Edit profile"
      trigger={<Button variant="outline">Open</Button>}
    >
      <Field.Group>
        <Field>
          <Field.Label>Name</Field.Label>
          <Input placeholder="John Doe" ref={inputRef} />
        </Field>
        <Field>
          <Field.Label>Email</Field.Label>
          <Input placeholder="john.doe@example.com" />
        </Field>
      </Field.Group>
    </Dialog>
  );
}
