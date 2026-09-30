import { Badge } from "@pisagor/astro/badge";
import DefaultExample from "#/astro/examples/badge/default.astro";
import PillExample from "#/astro/examples/badge/pill.astro";
import SizesExample from "#/astro/examples/badge/sizes.astro";
import VariantsExample from "#/astro/examples/badge/variants.astro";

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
