import { Stat } from "@pisagor/react";
import * as Examples from "@pisagor/react/stat/examples";
import preview from "#/storybook/preview";

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

export const Variants = meta.story({
  render: Examples.Variants,
});

export const WithTrend = meta.story({
  render: Examples.WithTrend,
});

export const Compound = meta.story({
  render: Examples.Compound,
});

export const Default = meta.story({
  render: Examples.Default,
});
