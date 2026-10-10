import { AlertDialog } from "@pisagor/react";
import * as Examples from "#/react/examples/alert-dialog";
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
  render: Examples.Variants,
  tags: ["autodocs"],
});

export const Variants = meta.story({
  render: Examples.Variants,
});

export const Composition = meta.story({
  render: Examples.Composition,
});
