import { Table } from "@pisagor/react";
import preview from "#/storybook/preview";
import * as Examples from "#/react/examples/data-display/table";

const meta = preview.meta({
  component: Table,
  parameters: {
    docs: {
      description: {
        component:
          "Presents rows and columns of data in a structured grid for comparison and scanning.",
      },
    },
  },
  title: "Components/Data Display/Table",
});

export const Playground = meta.story({
  render: Examples.Default,
  tags: ["autodocs"],
});

export const Default = meta.story({
  render: Examples.Default,
});

export const Variants = meta.story({
  render: Examples.Variants,
});

export const Sizes = meta.story({
  render: Examples.Sizes,
});

export const Footer = meta.story({
  render: Examples.Footer,
});

export const Actions = meta.story({
  render: Examples.Actions,
});

export const NotHoverable = meta.story({
  render: Examples.NotHoverable,
});

export const CustomRecipe = meta.story({
  render: Examples.CustomRecipe,
});
