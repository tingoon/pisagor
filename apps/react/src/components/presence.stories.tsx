import { Presence } from "@pisagor/react";
import * as Examples from "@pisagor/react/presence/examples";
import preview from "#/storybook/preview";

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
