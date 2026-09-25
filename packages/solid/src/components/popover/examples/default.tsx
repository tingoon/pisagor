import { Button } from "../../button";
import { Field } from "../../field";
import { Input } from "../../input";
import { Popover } from "../index";

export function Default() {
  return (
    <Popover>
      <Popover.Trigger
        asChild={(props) => (
          <Button {...props()} variant="outline">
            Open
          </Button>
        )}
      />
      <Popover.Content class="w-80">
        <Popover.Header description="Set the dimensions for the layer." title="Dimensions" />
        <Popover.Body>
          <Field.Group class="gap-2">
            <Field class="grid grid-cols-3 items-center gap-2">
              <Field.Label>Width</Field.Label>
              <Input class="col-span-2" value="100%" />
            </Field>
            <Field class="grid grid-cols-3 items-center gap-2">
              <Field.Label>Height</Field.Label>
              <Input class="col-span-2" value="25px" />
            </Field>
          </Field.Group>
        </Popover.Body>
      </Popover.Content>
    </Popover>
  );
}
