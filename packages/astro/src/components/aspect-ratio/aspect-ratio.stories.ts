import AspectRatio from "./aspect-ratio.astro";

export default {
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
};

export const Default = {
  args: {
    class: "max-w-sm rounded-xl border bg-muted",
    slots: {
      default:
        '<div class="flex size-full items-center justify-center"><span class="select-none text-muted-foreground text-xs">1:1</span></div>',
    },
  },
};

export const Widescreen = {
  args: {
    class: "max-w-lg rounded-xl border bg-muted",
    ratio: "16/9",
    slots: {
      default:
        '<div class="flex size-full items-center justify-center"><span class="select-none text-muted-foreground text-xs">16:9</span></div>',
    },
  },
};
