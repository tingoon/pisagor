import { CheckIcon, XIcon } from "@phosphor-icons/react";
import { Button, Input } from "@pisagor/react";
import { Editable } from "..";
export function Invalid() {
  return (
    <Editable>
      <Editable.Area>
        <Editable.Input asChild>
          <Input />
        </Editable.Input>
        <Editable.Preview />
      </Editable.Area>
      <Editable.Control>
        <Editable.CancelTrigger asChild>
          <Button aria-label="Cancel" size="icon-md" variant="outline">
            <XIcon />
          </Button>
        </Editable.CancelTrigger>
        <Editable.SubmitTrigger asChild>
          <Button aria-label="Save" size="icon-md" variant="outline">
            <CheckIcon />
          </Button>
        </Editable.SubmitTrigger>
      </Editable.Control>
    </Editable>
  );
}
