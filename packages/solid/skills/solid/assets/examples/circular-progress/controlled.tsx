/** @jsxImportSource solid-js */

import { Button, ButtonGroup } from "@pisagor/solid";
import { CircularProgress } from "@pisagor/solid/circular-progress";
import { MinusIcon, PlusIcon } from "@pisagor/solid/icons";
import { createSignal } from "solid-js";
export function Controlled() {
  const [value, setValue] = createSignal(55);

  return (
    <div class="flex flex-col items-center gap-2">
      <ButtonGroup>
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
      <CircularProgress value={value()} />
    </div>
  );
}
