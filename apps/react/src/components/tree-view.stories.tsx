import { TreeView } from "@pisagor/react";
import * as Examples from "@pisagor/react/tree-view/examples";

import preview from "#/storybook/preview";

const meta = preview.meta({
  component: TreeView,
  parameters: {
    docs: {
      description: {
        component:
          "Browses nested folders or categories in an expandable tree for files, navigation, and hierarchies.",
      },
    },
  },
  title: "Components/Navigation/Tree View",
});

export const Playground = meta.story({
  render: Examples.Default,
  tags: ["autodocs"],
});

export const Links = meta.story({
  render: Examples.Links,
});

export const CheckboxTree = meta.story({
  render: Examples.CheckboxTree,
});

export const WithContextMenu = meta.story({
  render: Examples.WithContextMenu,
});

export const CustomIconsFolder = meta.story({
  render: Examples.CustomIconsFolder,
});

export const CustomIconsItem = meta.story({
  render: Examples.CustomIconsItem,
});

export const CustomIcons = meta.story({
  render: Examples.CustomIcons,
});

export const MultipleSelection = meta.story({
  render: Examples.MultipleSelection,
});

export const Rename = meta.story({
  render: Examples.Rename,
});

export const Controlled = meta.story({
  render: Examples.Controlled,
});

export const Default = meta.story({
  render: Examples.Default,
});
