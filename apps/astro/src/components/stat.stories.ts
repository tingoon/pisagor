import { Stat } from "@pisagor/astro";
import * as Examples from "#/astro/examples/stat";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: Stat,
  parameters: {
    docs: {
      description: {
        component:
          "Highlights a key metric with an optional label, description, and trend.",
      },
    },
  },
  title: "Components/Data Display/Stat",
});

export const Playground = meta.story({
  args: {
    description: "+20.1% from last month",
    label: "Total Revenue",
    value: "$45,231.89",
  },
  tags: ["autodocs"],
});

export const Default = meta.story({
  render: () => ({ component: Examples.Default }),
});

export const Variants = meta.story({
  render: () => ({ component: Examples.Variants }),
});

export const WithTrend = meta.story({
  render: () => ({ component: Examples.WithTrend }),
});

export const Compound = meta.story({
  render: () => ({ component: Examples.Compound }),
});

export const CustomRecipe = meta.story({
  render: () => ({ component: Examples.CustomRecipe }),
});
