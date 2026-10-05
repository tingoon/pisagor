import { Button, Swap } from "@pisagor/solid";
import { MoonIcon, SunIcon } from "@pisagor/solid/icons";
import { createSignal } from "solid-js";
export function Variants() {
  const [fade, setFade] = createSignal(false);
  const [blur, setBlur] = createSignal(false);
  const [flip, setFlip] = createSignal(false);
  const [rotate, setRotate] = createSignal(false);
  const [scale, setScale] = createSignal(false);

  return (
    <div class="flex flex-wrap items-center gap-2">
      <Button
        aria-label="Toggle theme"
        onClick={() => setFade(!fade)}
        size="icon-lg"
        variant="outline"
      >
        <Swap
          off={<SunIcon />}
          on={<MoonIcon />}
          swap={fade()}
          variant="fade"
        />
      </Button>
      <Button
        aria-label="Toggle theme"
        onClick={() => setBlur(!blur)}
        size="icon-lg"
        variant="outline"
      >
        <Swap
          off={<SunIcon />}
          on={<MoonIcon />}
          swap={blur()}
          variant="blur"
        />
      </Button>
      <Button
        aria-label="Toggle theme"
        onClick={() => setFlip(!flip)}
        size="icon-lg"
        variant="outline"
      >
        <Swap
          off={<SunIcon />}
          on={<MoonIcon />}
          swap={flip()}
          variant="flip"
        />
      </Button>
      <Button
        aria-label="Toggle theme"
        onClick={() => setRotate(!rotate)}
        size="icon-lg"
        variant="outline"
      >
        <Swap
          off={<SunIcon />}
          on={<MoonIcon />}
          swap={rotate()}
          variant="rotate"
        />
      </Button>
      <Button
        aria-label="Toggle theme"
        onClick={() => setScale(!scale)}
        size="icon-lg"
        variant="outline"
      >
        <Swap
          off={<SunIcon />}
          on={<MoonIcon />}
          swap={scale()}
          variant="scale"
        />
      </Button>
    </div>
  );
}
