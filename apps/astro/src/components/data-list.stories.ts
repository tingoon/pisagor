import { DataList } from "@pisagor/astro";
import * as Examples from "#/astro/examples/data-list";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: DataList,
  parameters: {
    docs: {
      description: {
        component: "Presents labeled values in a compact definition list.",
      },
    },
  },
  title: "Components/Data Display/Data List",
});

export const Playground = meta.story({
  args: {
    items: [
      { label: "Name", value: "Ada Lovelace" },
      { label: "Email", value: "ada@example.com" },
      { label: "Role", value: "Mathematician" },
    ],
  },
  tags: ["autodocs"],
});

export const Default = meta.story({
  render: () => ({ component: Examples.Default }),
});

export const OrientationHorizontal = meta.story({
  render: () => ({ component: Examples.OrientationHorizontal }),
});

export const OrientationVertical = meta.story({
  render: () => ({ component: Examples.OrientationVertical }),
});

export const Separator = meta.story({
  render: () => ({ component: Examples.Separator }),
});

export const Compound = meta.story({
  render: () => ({ component: Examples.Compound }),
});
