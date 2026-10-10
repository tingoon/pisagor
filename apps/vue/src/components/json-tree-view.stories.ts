import { JsonTreeView } from "@pisagor/vue";
import { exampleRender } from "#/storybook/example-render";
import preview from "#/storybook/preview";
import * as Examples from "#/vue/examples/json-tree-view";

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

export const Default = meta.story({
  render: exampleRender(Examples.Default),
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

export const CustomRecipe = meta.story({
  render: exampleRender(Examples.CustomRecipe),
});
