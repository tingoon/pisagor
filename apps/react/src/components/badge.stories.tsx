import { Badge } from "@pisagor/react";
import * as Examples from "#/react/examples/badge";
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
    children: "Badge",
  },
  tags: ["autodocs"],
});

export const Variants = meta.story({
  render: Examples.Variants,
});

export const Sizes = meta.story({
  render: Examples.Sizes,
});

export const Pill = meta.story({
  render: Examples.Pill,
});

export const WithLink = meta.story({
  render: Examples.WithLink,
});

export const WithSpinner = meta.story({
  render: Examples.WithSpinner,
});

export const CustomColor = meta.story({
  render: Examples.CustomColor,
});

export const CustomRecipe = meta.story({
  render: Examples.CustomRecipe,
});
