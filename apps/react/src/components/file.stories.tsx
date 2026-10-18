import { FileItem } from "@pisagor/react";
import preview from "#/storybook/preview";
import * as Examples from "#/react/examples/data-display/file";

const meta = preview.meta({
  component: FileItem,
  parameters: {
    docs: {
      description: {
        component:
          "Represents a file such as an uploaded attachment or downloadable document with its name and metadata.",
      },
    },
  },
  title: "Components/Data Display/File",
});

export const Playground = meta.story({
  args: {
    meta: "PDF document",
    name: "brand-guidelines.pdf",
    size: 245_760,
  },
  tags: ["autodocs"],
});

export const Default = meta.story({
  render: Examples.Default,
});

export const WithActions = meta.story({
  render: Examples.WithActions,
});

export const Compound = meta.story({
  render: Examples.Compound,
});

export const CustomRecipe = meta.story({
  render: Examples.CustomRecipe,
});
