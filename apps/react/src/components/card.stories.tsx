import { Card } from "@pisagor/react";
import * as Examples from "@pisagor/react/card/examples";
import preview from "#/storybook/preview";

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

export const CustomSpacing = meta.story({
  render: Examples.CustomSpacing,
});

export const Icon = meta.story({
  render: Examples.Icon,
});

export const Product = meta.story({
  render: Examples.Product,
});
