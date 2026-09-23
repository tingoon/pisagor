import { MinusIcon, PlusIcon } from "@phosphor-icons/react";
import { Button, ButtonGroup, Field } from "@pisagor/react";
import { useState } from "react";
import { Progress } from "..";
export function Controlled() {
  const [value, setValue] = useState(50);

  return (
    <Field>
      <Field.Label className="flex items-center gap-2">
        Controlled progress
        <ButtonGroup className="ml-auto">
          <Button
            aria-label="Decrease"
            onClick={() => setValue(Math.max(0, value - 10))}
            size="icon-sm"
            variant="outline"
          >
            <MinusIcon />
          </Button>
          <Button
            aria-label="Increase"
            onClick={() => setValue(Math.min(100, value + 10))}
            size="icon-sm"
            variant="outline"
          >
            <PlusIcon />
          </Button>
        </ButtonGroup>
      </Field.Label>
      <Progress value={value} />
    </Field>
  );
}
