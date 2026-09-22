import { MinusIcon, PlusIcon } from "@phosphor-icons/react";
import { Button, ButtonGroup } from "@pisagor/react";
import { useState } from "react";
import { CircularProgress } from "..";
export function Controlled() {
  const [value, setValue] = useState(55);

  return (
    <div className="flex flex-col items-center gap-2">
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
      <CircularProgress value={value} />
    </div>
  );
}
