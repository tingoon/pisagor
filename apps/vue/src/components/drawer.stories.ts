import { Drawer } from "@pisagor/vue";
import { exampleRender } from "#/storybook/example-render";
import preview from "#/storybook/preview";
import * as Examples from "#/vue/examples/drawer";

const meta = preview.meta({
  component: Drawer,
  parameters: {
    docs: {
      description: {
        component:
          "Slides a panel over the page for secondary tasks or details without leaving the current context.",
      },
    },
  },
  title: "Components/Overlay/Drawer",
});

export const Playground = meta.story({
  tags: ["autodocs"],
});

export const Default = meta.story({
  render: exampleRender(Examples.Default),
});

export const Inset = meta.story({
  render: exampleRender(Examples.Inset),
});

export const DrawerContentInner = meta.story({
  render: exampleRender(Examples.DrawerContentInner),
});

export const SnapPoints = meta.story({
  render: exampleRender(Examples.SnapPoints),
});

export const SwipeDirections = meta.story({
  render: exampleRender(Examples.SwipeDirections),
});

export const CustomSpacing = meta.story({
  render: exampleRender(Examples.CustomSpacing),
});

export const CustomRecipe = meta.story({
  render: exampleRender(Examples.CustomRecipe),
});
