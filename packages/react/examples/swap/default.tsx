import { MoonIcon, SunIcon } from "@phosphor-icons/react";
import { Button } from "@pisagor/react";
import { Swap } from "@pisagor/react/swap";
import { useState } from "react";
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
