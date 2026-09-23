import { Dialog } from "@pisagor/react";
import * as Examples from "@pisagor/react/dialog/examples";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: Dialog,
  parameters: {
    docs: {
      description: {
        component:
          "Focuses attention on a task or decision in a modal layer above the current page.",
      },
    },
  },
  title: "Components/Overlay/Dialog",
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

export const InitialFocus = meta.story({
  render: Examples.InitialFocus,
});

export const Nested = meta.story({
  render: Examples.Nested,
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

export const CloseBehavior = meta.story({
  render: Examples.CloseBehavior,
});
