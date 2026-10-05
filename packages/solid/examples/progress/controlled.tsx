import { Button, ButtonGroup, Field, Progress } from "@pisagor/solid";
import { MinusIcon, PlusIcon } from "@pisagor/solid/icons";
import { createSignal } from "solid-js";
export function Controlled() {
  const [value, setValue] = createSignal(50);

  return (
    <Field>
      <Field.Label class="flex items-center gap-2">
        Controlled progress
        <ButtonGroup class="ml-auto">
          <Button
            aria-label="Decrease"
            onClick={() => setValue(Math.max(0, value() - 10))}
            size="icon-sm"
            variant="outline"
          >
            <MinusIcon />
          </Button>
          <Button
            aria-label="Increase"
            onClick={() => setValue(Math.min(100, value() + 10))}
            size="icon-sm"
            variant="outline"
          >
            <PlusIcon />
          </Button>
        </ButtonGroup>
      </Field.Label>
      <Progress value={value()} />
    </Field>
  );
}
