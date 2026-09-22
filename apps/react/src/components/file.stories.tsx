import { File } from "@pisagor/react";
import * as Examples from "@pisagor/react/file/examples";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: File,
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

export const WithActions = meta.story({
  render: Examples.WithActions,
});

export const Compound = meta.story({
  render: Examples.Compound,
});

export const Default = meta.story({
  render: Examples.Default,
});
