import { Table } from "@pisagor/react";
import * as Examples from "@pisagor/react/table/examples";
import preview from "#/storybook/preview";

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

export const Variants = meta.story({
  render: Examples.Variants,
});

export const Actions = meta.story({
  render: Examples.Actions,
});

export const Footer = meta.story({
  render: Examples.Footer,
});

export const NotHoverable = meta.story({
  render: Examples.NotHoverable,
});

export const Default = meta.story({
  render: Examples.Default,
});
