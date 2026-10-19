import { CheckIcon, XIcon } from "@squidlab/phosphor-solid/icons";
import { Button, Editable, Input } from "@pisagor/solid";

export function Invalid() {
  return (
    <Editable.Root defaultValue="Click to edit" invalid>
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
    </Editable.Root>
  );
}
