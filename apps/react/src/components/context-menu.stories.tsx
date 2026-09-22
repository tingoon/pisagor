import { ContextMenu } from "@pisagor/react";
import * as Examples from "@pisagor/react/context-menu/examples";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: ContextMenu,
  parameters: {
    docs: {
      description: {
        component:
          "Opens a menu of actions at the pointer so users can act on an item in its surrounding context.",
      },
    },
  },
  title: "Components/Overlay/Context Menu",
});

export const Playground = meta.story({
  render: Examples.Default,
  tags: ["autodocs"],
});

export const Default = meta.story({
  render: Examples.Default,
});
