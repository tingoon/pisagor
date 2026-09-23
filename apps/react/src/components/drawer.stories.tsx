import { Drawer } from "@pisagor/react";
import * as Examples from "@pisagor/react/drawer/examples";
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
  render: Examples.Default,
  tags: ["autodocs"],
});

export const Default = meta.story({
  render: Examples.Default,
});

export const CustomSpacing = meta.story({
  render: Examples.CustomSpacing,
});

export const DrawerContentInner = meta.story({
  render: Examples.DrawerContentInner,
});

export const Inset = meta.story({
  render: Examples.Inset,
});

export const SnapPoints = meta.story({
  render: Examples.SnapPoints,
});

export const SwipeDirections = meta.story({
  render: Examples.SwipeDirections,
});
