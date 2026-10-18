import { Card } from "@pisagor/react";
import preview from "#/storybook/preview";
import * as Examples from "#/react/examples/layout/card";

const meta = preview.meta({
  component: Card,
  parameters: {
    docs: {
      description: {
        component:
          "Groups related content and actions into a contained surface that people can scan and compare.",
      },
    },
  },
  title: "Components/Layout/Card",
});

export const Playground = meta.story({
  render: Examples.Default,
  tags: ["autodocs"],
});

export const Default = meta.story({
  render: Examples.Default,
});

export const Sizes = meta.story({
  render: Examples.Sizes,
});

export const Icon = meta.story({
  render: Examples.Icon,
});

export const Product = meta.story({
  render: Examples.Product,
});

export const CustomSpacing = meta.story({
  render: Examples.CustomSpacing,
});

export const CustomRecipe = meta.story({
  render: Examples.CustomRecipe,
});
