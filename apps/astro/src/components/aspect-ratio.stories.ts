import { AspectRatio } from "@pisagor/astro/aspect-ratio";
import DefaultExample from "#/astro/examples/aspect-ratio/default.astro";
import WidescreenExample from "#/astro/examples/aspect-ratio/widescreen.astro";

export default {
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
};

export const Playground = {
  args: {
    class: "max-w-sm rounded-xl border bg-muted",
    slots: {
      default:
        '<div class="flex size-full items-center justify-center"><span class="select-none text-muted-foreground text-xs">1:1</span></div>',
    },
  },
  tags: ["autodocs"],
};

export const Default = {
  render: () => ({ component: DefaultExample }),
};

export const Widescreen = {
  render: () => ({ component: WidescreenExample }),
};
