import { JsonTreeView } from "@pisagor/react";
import * as Examples from "@pisagor/react/json-tree-view/examples";
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
  args: {
    data: {
      address: {
        city: "Anytown",
        state: "CA",
        street: "123 Main St",
        zip: "12345",
      },
      age: 30,
      email: "john.doe@example.com",
      name: "John Doe",
    },
    defaultExpandedDepth: 1,
  },
  tags: ["autodocs"],
});

export const DataTypes = meta.story({
  render: Examples.DataTypes,
});

export const ExpandDepth = meta.story({
  render: Examples.ExpandDepth,
});

export const MapSet = meta.story({
  render: Examples.MapSet,
});

export const Default = meta.story({
  render: Examples.Default,
});
