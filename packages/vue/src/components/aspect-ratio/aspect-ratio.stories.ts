import { AspectRatio } from "@pisagor/vue";
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
    metadata: {
      api: "closed",
      taxonomy: "primitive",
    },
  },
  title: "Components/Layout/Aspect Ratio",
});

export const Default = meta.story({
  render: () => ({
    components: { AspectRatio },
    template: `
      <AspectRatio class="rounded-xl border bg-muted">
        <div class="flex size-full items-center justify-center">
          <span class="select-none text-muted-foreground text-xs">1:1</span>
        </div>
      </AspectRatio>
    `,
  }),
});

export const Video = meta.story({
  render: () => ({
    components: { AspectRatio },
    template: `
      <AspectRatio class="rounded-xl border bg-muted [--ratio:16/9]">
        <div class="flex size-full items-center justify-center">
          <span class="select-none text-muted-foreground text-xs">16:9</span>
        </div>
      </AspectRatio>
    `,
  }),
});

export const Portrait = meta.story({
  render: () => ({
    components: { AspectRatio },
    template: `
      <AspectRatio class="rounded-xl border bg-muted [--ratio:9/16]">
        <div class="flex size-full items-center justify-center">
          <span class="select-none text-muted-foreground text-xs">9:16</span>
        </div>
      </AspectRatio>
    `,
  }),
});

export const Responsive = meta.story({
  render: () => ({
    components: { AspectRatio },
    template: `
      <AspectRatio class="rounded-xl border bg-muted sm:[--ratio:16/9] md:[--ratio:1/1]">
        <div class="flex size-full items-center justify-center">
          <span class="select-none text-muted-foreground text-xs">16:9 → 1:1</span>
        </div>
      </AspectRatio>
    `,
  }),
});

export const Square = meta.story({
  render: () => ({
    components: { AspectRatio },
    template: `
      <AspectRatio class="rounded-xl border bg-muted [--ratio:1/1]">
        <div class="flex size-full items-center justify-center">
          <span class="select-none text-muted-foreground text-xs">1:1</span>
        </div>
      </AspectRatio>
    `,
  }),
});
