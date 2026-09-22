import { CheckIcon, XIcon } from "@phosphor-icons/react";
import { Button, Textarea } from "@pisagor/react";
import { Editable } from "..";
export function OrientationVertical() {
  return (
    <Editable>
      <Editable.Area>
        <Editable.Input asChild>
          <Textarea className="min-h-24" />
        </Editable.Input>
        <Editable.Preview className="min-h-24" />
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
