import { Popover } from "@pisagor/react";
import * as Examples from "#/react/examples/popover";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: Popover,
  parameters: {
    docs: {
      description: {
        component:
          "Anchors extra content to a trigger for compact forms, menus, or details without a full modal.",
      },
    },
  },
  title: "Components/Overlay/Popover",
});

export const Playground = meta.story({
  render: Examples.Default,
  tags: ["autodocs"],
});

export const Default = meta.story({
  render: Examples.Default,
});

export const CloseButton = meta.story({
  render: Examples.CloseButton,
});

export const Anchor = meta.story({
  render: Examples.Anchor,
});

export const Nested = meta.story({
  render: Examples.Nested,
});

export const ScrollArea = meta.story({
  render: Examples.ScrollArea,
});

export const Modal = meta.story({
  render: Examples.Modal,
});

export const CloseBehavior = meta.story({
  render: Examples.CloseBehavior,
});

export const Placements = meta.story({
  render: Examples.Placements,
});

export const CustomSpacing = meta.story({
  render: Examples.CustomSpacing,
});
