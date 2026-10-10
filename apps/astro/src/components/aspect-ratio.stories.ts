import { AspectRatio } from "@pisagor/astro";
import * as Examples from "#/astro/examples/aspect-ratio";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: AspectRatio,
  parameters: {
    docs: {
      description: {
        component:
          "Keeps media and embedded content at a consistent width-to-height ratio as the layout changes.",
      },
    },
  },
  title: "Components/Layout/Aspect Ratio",
});

export const Playground = meta.story({
  args: {
    class: "max-w-sm rounded-xl border bg-muted",
    slots: {
      default:
        '<div class="flex size-full items-center justify-center"><span class="select-none text-muted-foreground text-xs">1:1</span></div>',
    },
  },
  tags: ["autodocs"],
});

export const Default = meta.story({
  render: () => ({ component: Examples.Default }),
});

export const Portrait = meta.story({
  render: () => ({ component: Examples.Portrait }),
});

export const Responsive = meta.story({
  render: () => ({ component: Examples.Responsive }),
});

export const Square = meta.story({
  render: () => ({ component: Examples.Square }),
});

export const Video = meta.story({
  render: () => ({ component: Examples.Video }),
});
