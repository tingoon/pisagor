import { MoonIcon, SunIcon } from "@phosphor-icons/react";
import { Button } from "@pisagor/react";
import { useState } from "react";
import { Swap } from "..";
export function Default() {
  const [swap, setSwap] = useState(false);

  return (
    <Button
      aria-label="Toggle theme"
      onClick={() => setSwap(!swap)}
      size="icon-lg"
      variant="outline"
    >
      <Swap off={<SunIcon />} on={<MoonIcon />} swap={swap} />
    </Button>
  );
}
