import { DataList } from "@pisagor/react";
import * as Examples from "@pisagor/react/data-list/examples";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: DataList,
  parameters: {
    docs: {
      description: {
        component:
          "Presents label-value pairs in a readable list for summaries, metadata, and detail views.",
      },
    },
  },
  title: "Components/Data Display/Data List",
});

export const Playground = meta.story({
  args: {
    items: [
      { label: "New users", value: "234" },
      { label: "Sales", value: "£12,340" },
      { label: "Revenue", value: "3,450" },
    ],
  },
  tags: ["autodocs"],
});

export const OrientationHorizontal = meta.story({
  render: Examples.OrientationHorizontal,
});

export const OrientationVertical = meta.story({
  render: Examples.OrientationVertical,
});

export const Separator = meta.story({
  render: Examples.Separator,
});

export const InfoTip = meta.story({
  render: Examples.InfoTip,
});

export const Compound = meta.story({
  render: Examples.Compound,
});

export const Default = meta.story({
  render: Examples.Default,
});
