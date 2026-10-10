import { NavigationMenu } from "@pisagor/react";
import * as Examples from "#/react/examples/navigation-menu";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: NavigationMenu,
  parameters: {
    docs: {
      description: {
        component:
          "Displays a horizontal set of navigation links so users can move between top-level sections.",
      },
    },
  },
  title: "Components/Navigation/Navigation Menu",
});

export const Playground = meta.story({
  render: Examples.Default,
  tags: ["autodocs"],
});

export const Default = meta.story({
  render: Examples.Default,
});

export const Wrapping = meta.story({
  render: Examples.Wrapping,
});

export const CustomRecipe = meta.story({
  render: Examples.CustomRecipe,
});
