import { DataList } from "@pisagor/vue";
import * as Examples from "@pisagor/vue/data-list/examples";
import { exampleRender } from "#/storybook/example-render";
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
  tags: ["autodocs"],
});

export const OrientationHorizontal = meta.story({
  render: exampleRender(Examples.OrientationHorizontal),
});

export const OrientationVertical = meta.story({
  render: exampleRender(Examples.OrientationVertical),
});

export const Separator = meta.story({
  render: exampleRender(Examples.Separator),
});

export const InfoTip = meta.story({
  render: exampleRender(Examples.InfoTip),
});

export const Compound = meta.story({
  render: exampleRender(Examples.Compound),
});

export const Default = meta.story({
  render: exampleRender(Examples.Default),
});
