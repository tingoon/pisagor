import { TreeView } from "@pisagor/vue";
import { exampleRender } from "#/storybook/example-render";
import preview from "#/storybook/preview";
import * as Examples from "#/vue/examples/tree-view";

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
  tags: ["autodocs"],
});

export const Default = meta.story({
  render: exampleRender(Examples.Default),
});

export const CustomIcons = meta.story({
  render: exampleRender(Examples.CustomIcons),
});

export const CustomIconsFolder = meta.story({
  render: exampleRender(Examples.CustomIconsFolder),
});

export const CustomIconsItem = meta.story({
  render: exampleRender(Examples.CustomIconsItem),
});

export const CheckboxTree = meta.story({
  render: exampleRender(Examples.CheckboxTree),
});

export const WithContextMenu = meta.story({
  render: exampleRender(Examples.WithContextMenu),
});

export const Links = meta.story({
  render: exampleRender(Examples.Links),
});

export const Controlled = meta.story({
  render: exampleRender(Examples.Controlled),
});

export const MultipleSelection = meta.story({
  render: exampleRender(Examples.MultipleSelection),
});

export const Rename = meta.story({
  render: exampleRender(Examples.Rename),
});
