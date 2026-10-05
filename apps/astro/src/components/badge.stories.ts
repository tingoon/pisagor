import { Badge } from "@pisagor/astro";
import * as Examples from "#/astro/examples/badge";
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
  render: () => ({ component: Examples.Default }),
});

export const Sizes = meta.story({
  render: () => ({ component: Examples.Sizes }),
});

export const Variants = meta.story({
  render: () => ({ component: Examples.Variants }),
});

export const Pill = meta.story({
  render: () => ({ component: Examples.Pill }),
});

export const CustomColor = meta.story({
  render: () => ({ component: Examples.CustomColor }),
});

export const WithLink = meta.story({
  render: () => ({ component: Examples.WithLink }),
});

export const WithSpinner = meta.story({
  render: () => ({ component: Examples.WithSpinner }),
});
