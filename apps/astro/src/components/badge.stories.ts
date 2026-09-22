import { Badge } from "@pisagor/astro/badge";
import DefaultExample from "@pisagor/astro/badge/examples/default.astro";
import PillExample from "@pisagor/astro/badge/examples/pill.astro";
import SizesExample from "@pisagor/astro/badge/examples/sizes.astro";
import VariantsExample from "@pisagor/astro/badge/examples/variants.astro";

export default {
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
};

export const Playground = {
  args: {
    slots: { default: "Badge" },
  },
  tags: ["autodocs"],
};

export const Default = {
  render: () => ({ component: DefaultExample }),
};

export const Sizes = {
  render: () => ({ component: SizesExample }),
};

export const Variants = {
  render: () => ({ component: VariantsExample }),
};

export const Pill = {
  render: () => ({ component: PillExample }),
};
