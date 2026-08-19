import { AspectRatio } from "@pisagor/react/aspect-ratio";
import preview from "#/react/preview";

const meta = preview.meta({
  component: AspectRatio,
  parameters: {
    docs: {
      api: "closed",
      description: {
        component:
          "Keeps media and embedded content at a consistent width-to-height ratio as the layout changes.",
      },
      taxonomy: "primitive",
    },
  },
  title: "Components/Layout/Aspect Ratio",
});

export const Default = meta.story({
  render: () => (
    <AspectRatio className="rounded-xl border bg-muted">
      <div className="flex size-full items-center justify-center">
        <span className="select-none text-muted-foreground text-xs">1:1</span>
      </div>
    </AspectRatio>
  ),
});

export const Portrait = meta.story({
  render: () => (
    <AspectRatio className="rounded-xl border bg-muted [--ratio:9/16]">
      <div className="flex size-full items-center justify-center">
        <span className="select-none text-muted-foreground text-xs">9:16</span>
      </div>
    </AspectRatio>
  ),
});

export const Responsive = meta.story({
  render: () => (
    <AspectRatio className="rounded-xl border bg-muted sm:[--ratio:16/9] md:[--ratio:1/1]">
      <div className="flex size-full items-center justify-center">
        <span className="select-none text-muted-foreground text-xs">16:9 → 1:1</span>
      </div>
    </AspectRatio>
  ),
});

export const Square = meta.story({
  render: () => (
    <AspectRatio className="rounded-xl border bg-muted [--ratio:1/1]">
      <div className="flex size-full items-center justify-center">
        <span className="select-none text-muted-foreground text-xs">1:1</span>
      </div>
    </AspectRatio>
  ),
});

export const Video = meta.story({
  render: () => (
    <AspectRatio className="rounded-xl border bg-muted [--ratio:16/9]">
      <div className="flex size-full items-center justify-center">
        <span className="select-none text-muted-foreground text-xs">16:9</span>
      </div>
    </AspectRatio>
  ),
});
