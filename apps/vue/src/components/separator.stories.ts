import { Separator } from "@pisagor/vue";
import * as Examples from "@pisagor/vue/separator/examples";
import { exampleRender } from "#/storybook/example-render";
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
  tags: ["autodocs"],
});

export const Default = meta.story({
  render: exampleRender(Examples.Default),
});

export const List = meta.story({
  render: exampleRender(Examples.List),
});

export const InlineNavigation = meta.story({
  render: exampleRender(Examples.InlineNavigation),
});

export const Vertical = meta.story({
  render: exampleRender(Examples.Vertical),
});
