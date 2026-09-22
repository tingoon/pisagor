import { Table } from "@pisagor/vue";
import * as Examples from "@pisagor/vue/table/examples";
import { exampleRender } from "#/storybook/example-render";
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
  tags: ["autodocs"],
});

export const Variants = meta.story({
  render: exampleRender(Examples.Variants),
});

export const Actions = meta.story({
  render: exampleRender(Examples.Actions),
});

export const Footer = meta.story({
  render: exampleRender(Examples.Footer),
});

export const NotHoverable = meta.story({
  render: exampleRender(Examples.NotHoverable),
});

export const Default = meta.story({
  render: exampleRender(Examples.Default),
});
