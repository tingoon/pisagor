import { FloatingPanel } from "@pisagor/react";
import * as Examples from "#/react/examples/floating-panel";

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

export const Default = meta.story({
  render: Examples.Default,
});

export const ControlledPosition = meta.story({
  render: Examples.ControlledPosition,
});

export const ControlledSize = meta.story({
  render: Examples.ControlledSize,
});

export const CustomSpacing = meta.story({
  render: Examples.CustomSpacing,
});

export const CustomRecipe = meta.story({
  render: Examples.CustomRecipe,
});
