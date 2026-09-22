import { Resizable } from "@pisagor/react";
import * as Examples from "@pisagor/react/resizable/examples";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: Resizable,
  parameters: {
    docs: {
      description: {
        component:
          "Splits space between panels with draggable handles so users can adjust layout to their needs.",
      },
    },
  },
  title: "Components/Layout/Resizable",
});

export const Playground = meta.story({
  render: Examples.Default,
  tags: ["autodocs"],
});

export const Default = meta.story({
  render: Examples.Default,
});

export const MinMax = meta.story({
  render: Examples.MinMax,
});

export const OrientationHorizontal = meta.story({
  render: Examples.OrientationHorizontal,
});

export const OrientationVertical = meta.story({
  render: Examples.OrientationVertical,
});

export const Handle = meta.story({
  render: Examples.Handle,
});

export const EdgeHandle = meta.story({
  parameters: {
    docs: {
      description: {
        story:
          "Standalone edge handle for regions outside a splitter — drag to resize, double-click to reset.",
      },
    },
  },
  render: Examples.EdgeHandle,
});

export const MultiplePanels = meta.story({
  render: Examples.MultiplePanels,
});

export const Collapsible = meta.story({
  render: Examples.Collapsible,
});
