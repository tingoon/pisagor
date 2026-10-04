/** @jsxImportSource solid-js */

import { Button, Editable, Input } from "@pisagor/solid";
import { CheckIcon, XIcon } from "@pisagor/solid/icons";
export function Sizes() {
  return (
    <div class="flex flex-col gap-2">
      <Editable defaultValue="Editable content">
        <Editable.Area>
          <Editable.Input
            asChild={(props) => <Input {...props()} size="sm" />}
          />
          <Editable.Preview size="sm" />
        </Editable.Area>
        <Editable.Control>
          <Editable.CancelTrigger
            asChild={(props) => (
              <Button
                {...props()}
                aria-label="Cancel"
                size="icon-sm"
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
                size="icon-sm"
                variant="outline"
              >
                <CheckIcon />
              </Button>
            )}
          />
        </Editable.Control>
      </Editable>
      <Editable defaultValue="Editable content">
        <Editable.Area>
          <Editable.Input
            asChild={(props) => <Input {...props()} size="md" />}
          />
          <Editable.Preview size="md" />
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
      <Editable defaultValue="Editable content">
        <Editable.Area>
          <Editable.Input
            asChild={(props) => <Input {...props()} size="lg" />}
          />
          <Editable.Preview size="lg" />
        </Editable.Area>
        <Editable.Control>
          <Editable.CancelTrigger
            asChild={(props) => (
              <Button
                {...props()}
                aria-label="Cancel"
                size="icon-lg"
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
                size="icon-lg"
                variant="outline"
              >
                <CheckIcon />
              </Button>
            )}
          />
        </Editable.Control>
      </Editable>
    </div>
  );
}
