import { Separator } from "@pisagor/react";
import * as Examples from "@pisagor/react/separator/examples";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: Separator,
  parameters: {
    docs: {
      description: {
        component: "Visually divides sections of content so grouped information is easier to scan.",
      },
    },
  },
  title: "Components/Layout/Separator",
});

export const Playground = meta.story({
  render: Examples.Default,
  tags: ["autodocs"],
});

export const Default = meta.story({
  render: Examples.Default,
});

export const List = meta.story({
  render: Examples.List,
});

export const InlineNavigation = meta.story({
  render: Examples.InlineNavigation,
});

export const Vertical = meta.story({
  render: Examples.Vertical,
});
