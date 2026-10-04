/** @jsxImportSource solid-js */

import { Button, Input } from "@pisagor/solid";
import { Editable } from "@pisagor/solid/editable";
import { CheckIcon, XIcon } from "@pisagor/solid/icons";
export function Disabled() {
  return (
    <Editable>
      <Editable.Area>
        <Editable.Input asChild={(props) => <Input {...props()} />} />
        <Editable.Preview />
      </Editable.Area>
      <Editable.Control>
        <Editable.CancelTrigger
          asChild={(props) => (
            <Button
              {...props()}
              aria-label="Cancel"
              size="icon-md"
              variant="outline"
            >
              <XIcon />
            </Button>
          )}
        />
        <Editable.SubmitTrigger
          asChild={(props) => (
            <Button
              {...props()}
              aria-label="Save"
              size="icon-md"
              variant="outline"
            >
              <CheckIcon />
            </Button>
          )}
        />
      </Editable.Control>
    </Editable>
  );
}
