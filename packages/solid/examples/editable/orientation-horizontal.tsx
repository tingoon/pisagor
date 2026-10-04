/** @jsxImportSource solid-js */

import { Button, Editable, Input } from "@pisagor/solid";
import { CheckIcon, XIcon } from "@pisagor/solid/icons";
export function OrientationHorizontal() {
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
