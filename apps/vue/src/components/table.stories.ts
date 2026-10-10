import { Table } from "@pisagor/vue";
import { exampleRender } from "#/storybook/example-render";
import preview from "#/storybook/preview";
import * as Examples from "#/vue/examples/table";

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
  tags: ["autodocs"],
});

export const Default = meta.story({
  render: exampleRender(Examples.Default),
});

export const Variants = meta.story({
  render: exampleRender(Examples.Variants),
});

export const Footer = meta.story({
  render: exampleRender(Examples.Footer),
});

export const Actions = meta.story({
  render: exampleRender(Examples.Actions),
});

export const NotHoverable = meta.story({
  render: exampleRender(Examples.NotHoverable),
});

export const CustomRecipe = meta.story({
  render: exampleRender(Examples.CustomRecipe),
});
