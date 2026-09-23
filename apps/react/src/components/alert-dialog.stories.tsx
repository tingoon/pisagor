import { AlertDialog } from "@pisagor/react";
import * as Examples from "@pisagor/react/alert-dialog/examples";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: AlertDialog,
  parameters: {
    docs: {
      description: {
        component:
          "Interrupts the user with a focused confirmation before a destructive or irreversible action proceeds.",
      },
    },
  },
  title: "Components/Overlay/Alert Dialog",
});

export const Playground = meta.story({
  render: Examples.Default,
  tags: ["autodocs"],
});

export const Default = meta.story({
  render: Examples.Default,
});

export const Variants = meta.story({
  render: Examples.Variants,
});

export const Composition = meta.story({
  render: Examples.Composition,
});
