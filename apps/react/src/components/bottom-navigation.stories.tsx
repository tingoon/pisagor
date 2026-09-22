import { BottomNavigation } from "@pisagor/react";
import * as Examples from "@pisagor/react/bottom-navigation/examples";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: BottomNavigation,
  parameters: {
    docs: {
      description: {
        component:
          "Gives mobile users quick access to the main sections of an app from a bar fixed to the bottom of the screen.",
      },
    },
  },
  title: "Components/Navigation/Bottom Navigation",
});

export const Playground = meta.story({
  render: Examples.Default,
  tags: ["autodocs"],
});

export const Default = meta.story({
  render: Examples.Default,
});

export const IconOnly = meta.story({
  render: Examples.IconOnly,
});

export const WithLinks = meta.story({
  render: Examples.WithLinks,
});
