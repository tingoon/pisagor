import { Stat } from "@pisagor/react";
import preview from "#/storybook/preview";
import * as Examples from "#/react/examples/data-display/stat";

const meta = preview.meta({
  component: Stat,
  parameters: {
    docs: {
      description: {
        component:
          "Displays a metric with supporting context so users can quickly scan performance and changes.",
      },
    },
  },
  title: "Components/Data Display/Stat",
});

export const Playground = meta.story({
  args: {
    description: "Updated 2 minutes ago",
    label: "Monthly recurring revenue",
    value: "$124,320",
  },
  tags: ["autodocs"],
});

export const Default = meta.story({
  render: Examples.Default,
});

export const Variants = meta.story({
  render: Examples.Variants,
});

export const WithTrend = meta.story({
  render: Examples.WithTrend,
});

export const Compound = meta.story({
  render: Examples.Compound,
});

export const CustomRecipe = meta.story({
  render: Examples.CustomRecipe,
});
