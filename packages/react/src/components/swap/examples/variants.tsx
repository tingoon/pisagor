import { MoonIcon, SunIcon } from "@phosphor-icons/react";
import { Button } from "@pisagor/react";
import { useState } from "react";
import { Swap } from "..";
export function Variants() {
  const [fade, setFade] = useState(false);
  const [blur, setBlur] = useState(false);
  const [flip, setFlip] = useState(false);
  const [rotate, setRotate] = useState(false);
  const [scale, setScale] = useState(false);

  return (
    <div className="flex flex-wrap items-center gap-2">
      <Button
        aria-label="Toggle theme"
        onClick={() => setFade(!fade)}
        size="icon-lg"
        variant="outline"
      >
        <Swap off={<SunIcon />} on={<MoonIcon />} swap={fade} variant="fade" />
      </Button>
      <Button
        aria-label="Toggle theme"
        onClick={() => setBlur(!blur)}
        size="icon-lg"
        variant="outline"
      >
        <Swap off={<SunIcon />} on={<MoonIcon />} swap={blur} variant="blur" />
      </Button>
      <Button
        aria-label="Toggle theme"
        onClick={() => setFlip(!flip)}
        size="icon-lg"
        variant="outline"
      >
        <Swap off={<SunIcon />} on={<MoonIcon />} swap={flip} variant="flip" />
      </Button>
      <Button
        aria-label="Toggle theme"
        onClick={() => setRotate(!rotate)}
        size="icon-lg"
        variant="outline"
      >
        <Swap off={<SunIcon />} on={<MoonIcon />} swap={rotate} variant="rotate" />
      </Button>
      <Button
        aria-label="Toggle theme"
        onClick={() => setScale(!scale)}
        size="icon-lg"
        variant="outline"
      >
        <Swap off={<SunIcon />} on={<MoonIcon />} swap={scale} variant="scale" />
      </Button>
    </div>
  );
}
