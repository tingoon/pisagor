import { Sheet } from "@pisagor/react";
import * as Examples from "@pisagor/react/sheet/examples";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: Sheet,
  parameters: {
    docs: {
      description: {
        component:
          "Slides a panel in from the edge of the screen for secondary tasks on mobile and desktop.",
      },
    },
  },
  title: "Components/Overlay/Sheet",
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

export const Inset = meta.story({
  render: Examples.Inset,
});

export const NoCloseButton = meta.story({
  render: Examples.NoCloseButton,
});

export const NonModal = meta.story({
  render: Examples.NonModal,
});

export const ScrollArea = meta.story({
  render: Examples.ScrollArea,
});

export const Sides = meta.story({
  render: Examples.Sides,
});

export const CloseBehavior = meta.story({
  render: Examples.CloseBehavior,
});
