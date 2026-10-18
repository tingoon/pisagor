import { Presence } from "@pisagor/react";
import preview from "#/storybook/preview";
import * as Examples from "#/react/examples/utilities/presence";

const meta = preview.meta({
  component: Presence,
  parameters: {
    docs: {
      description: {
        component:
          "Animates elements in and out of the tree so enter and exit transitions feel smooth.",
      },
    },
  },
  title: "Components/Utilities/Presence",
});

export const Playground = meta.story({
  render: Examples.Default,
  tags: ["autodocs"],
});

export const Default = meta.story({
  render: Examples.Default,
});
