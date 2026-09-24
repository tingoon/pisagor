import { Button } from "../../button";
import { Editable } from "../index";

export function Default() {
  return (
    <Editable.Root defaultValue="Click to edit">
      <Editable.Area>
        <Editable.Preview />
        <Editable.Input />
      </Editable.Area>
      <Editable.Control>
        <Editable.EditTrigger
          asChild={(props) => (
            <Button {...props()} size="sm" variant="ghost">
              Edit
            </Button>
          )}
        />
        <Editable.CancelTrigger
          asChild={(props) => (
            <Button {...props()} size="sm" variant="ghost">
              Cancel
            </Button>
          )}
        />
        <Editable.SubmitTrigger
          asChild={(props) => (
            <Button {...props()} size="sm">
              Save
            </Button>
          )}
        />
      </Editable.Control>
    </Editable.Root>
  );
}
