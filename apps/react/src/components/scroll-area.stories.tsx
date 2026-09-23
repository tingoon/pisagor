import { ScrollArea } from "@pisagor/react";
import * as Examples from "@pisagor/react/scroll-area/examples";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: ScrollArea,
  parameters: {
    docs: {
      description: {
        component:
          "Scrolls overflow content with styled scrollbars and optional fade edges that match the surrounding interface.",
      },
    },
  },
  title: "Components/Layout/Scroll Area",
});

export const Playground = meta.story({
  render: Examples.Default,
  tags: ["autodocs"],
});

export const Horizontal = meta.story({
  render: Examples.Horizontal,
});

export const ScrollFade = meta.story({
  render: Examples.ScrollFade,
});

export const BothDirections = meta.story({
  render: Examples.BothDirections,
});

export const Nested = meta.story({
  render: Examples.Nested,
});

export const Default = meta.story({
  render: Examples.Default,
});
