import { MoonIcon, SunIcon } from "@phosphor-icons/react";
import { Button, Swap } from "@pisagor/react";
import { useState } from "react";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: Swap,
  parameters: {
    docs: {
      api: "closed",
      checklist: {
        definedOptions: true,
        interactiveStates: true,
        platformScales: true,
      },
      description: {
        component:
          "Swaps between two pieces of content with a transition, such as play and pause icons.",
      },
      taxonomy: "primitive",
    },
  },
  title: "Components/Actions/Swap",
});

export const Default = meta.story({
  render: () => {
    const [swap, setSwap] = useState(false);

    return (
      <Button onClick={() => setSwap(!swap)} size="icon-lg" variant="outline">
        <Swap off={<SunIcon />} on={<MoonIcon />} swap={swap} />
      </Button>
    );
  },
});

export const Variants = meta.story({
  render: () => {
    const [fade, setFade] = useState(false);
    const [blur, setBlur] = useState(false);
    const [flip, setFlip] = useState(false);
    const [rotate, setRotate] = useState(false);
    const [scale, setScale] = useState(false);

    return (
      <div className="flex flex-wrap items-center gap-2">
        <Button onClick={() => setFade(!fade)} size="icon-lg" variant="outline">
          <Swap off={<SunIcon />} on={<MoonIcon />} swap={fade} variant="fade" />
        </Button>
        <Button onClick={() => setBlur(!blur)} size="icon-lg" variant="outline">
          <Swap off={<SunIcon />} on={<MoonIcon />} swap={blur} variant="blur" />
        </Button>
        <Button onClick={() => setFlip(!flip)} size="icon-lg" variant="outline">
          <Swap off={<SunIcon />} on={<MoonIcon />} swap={flip} variant="flip" />
        </Button>
        <Button onClick={() => setRotate(!rotate)} size="icon-lg" variant="outline">
          <Swap off={<SunIcon />} on={<MoonIcon />} swap={rotate} variant="rotate" />
        </Button>
        <Button onClick={() => setScale(!scale)} size="icon-lg" variant="outline">
          <Swap off={<SunIcon />} on={<MoonIcon />} swap={scale} variant="scale" />
        </Button>
      </div>
    );
  },
});
