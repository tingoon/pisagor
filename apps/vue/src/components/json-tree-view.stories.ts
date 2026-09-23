import { JsonTreeView } from "@pisagor/vue";
import * as Examples from "@pisagor/vue/json-tree-view/examples";
import { exampleRender } from "#/storybook/example-render";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: JsonTreeView,
  parameters: {
    docs: {
      description: {
        component:
          "Explores nested JSON as an expandable tree so structured data is easier to inspect.",
      },
    },
  },
  title: "Components/Data Display/JSON Tree View",
});

export const Playground = meta.story({
  render: exampleRender(Examples.Default),
  tags: ["autodocs"],
});

export const DataTypes = meta.story({
  render: exampleRender(Examples.DataTypes),
});

export const ExpandDepth = meta.story({
  render: exampleRender(Examples.ExpandDepth),
});

export const MapSet = meta.story({
  render: exampleRender(Examples.MapSet),
});

export const Default = meta.story({
  render: exampleRender(Examples.Default),
});
