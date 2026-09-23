import { Drawer } from "@pisagor/vue";
import * as Examples from "@pisagor/vue/drawer/examples";
import { exampleRender } from "#/storybook/example-render";
import preview from "#/storybook/preview";

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

export const CustomSpacing = meta.story({
  render: exampleRender(Examples.CustomSpacing),
});

export const DrawerContentInner = meta.story({
  render: exampleRender(Examples.DrawerContentInner),
});

export const Inset = meta.story({
  render: exampleRender(Examples.Inset),
});

export const SnapPoints = meta.story({
  render: exampleRender(Examples.SnapPoints),
});

export const SwipeDirections = meta.story({
  render: exampleRender(Examples.SwipeDirections),
});

export const Default = meta.story({
  render: exampleRender(Examples.Default),
});
