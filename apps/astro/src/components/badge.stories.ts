import { Badge } from "@pisagor/astro";
import DefaultExample from "#/astro/examples/badge/default.astro";
import PillExample from "#/astro/examples/badge/pill.astro";
import SizesExample from "#/astro/examples/badge/sizes.astro";
import VariantsExample from "#/astro/examples/badge/variants.astro";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: Badge,
  parameters: {
    docs: {
      description: {
        component:
          "Labels content with a compact status, category, or count so users can scan it quickly.",
      },
    },
  },
  title: "Components/Data Display/Badge",
});

export const Playground = meta.story({
  args: {
    slots: { default: "Badge" },
  },
  tags: ["autodocs"],
});

export const Default = meta.story({
  render: () => ({ component: DefaultExample }),
});

export const Sizes = meta.story({
  render: () => ({ component: SizesExample }),
});

export const Variants = meta.story({
  render: () => ({ component: VariantsExample }),
});

export const Pill = meta.story({
  render: () => ({ component: PillExample }),
});
