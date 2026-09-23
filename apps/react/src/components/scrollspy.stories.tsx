import { Scrollspy } from "@pisagor/react";
import * as Examples from "@pisagor/react/scrollspy/examples";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: Scrollspy,
  parameters: {
    docs: {
      description: {
        component:
          "Highlights navigation links to show which section is currently visible while scrolling.",
      },
    },
  },
  title: "Components/Navigation/Scroll Spy",
});

export const Playground = meta.story({
  render: Examples.Default,
  tags: ["autodocs"],
});

export const Horizontal = meta.story({
  render: Examples.Horizontal,
});

export const Default = meta.story({
  render: Examples.Default,
});
