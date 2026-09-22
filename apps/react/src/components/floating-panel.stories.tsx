import { FloatingPanel } from "@pisagor/react";
import * as Examples from "@pisagor/react/floating-panel/examples";

import preview from "#/storybook/preview";

const meta = preview.meta({
  component: FloatingPanel,
  parameters: {
    docs: {
      description: {
        component:
          "Presents draggable, resizable content in a floating window for tools or inspectors.",
      },
    },
  },
  title: "Components/Overlay/Floating Panel",
});

export const Playground = meta.story({
  render: Examples.Default,
  tags: ["autodocs"],
});

export const CustomSpacing = meta.story({
  render: Examples.CustomSpacing,
});

export const ControlledPosition = meta.story({
  render: Examples.ControlledPosition,
});

export const ControlledSize = meta.story({
  render: Examples.ControlledSize,
});

export const Default = meta.story({
  render: Examples.Default,
});
