import { Scrollspy } from "@pisagor/react";
import preview from "#/storybook/preview";
import * as Examples from "#/react/examples/navigation/scrollspy";

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

export const Default = meta.story({
  render: Examples.Default,
});

export const Horizontal = meta.story({
  render: Examples.Horizontal,
});
