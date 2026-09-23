import { ScrollArea } from "@pisagor/vue";
import * as Examples from "@pisagor/vue/scroll-area/examples";
import { exampleRender } from "#/storybook/example-render";
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
  tags: ["autodocs"],
});

export const Horizontal = meta.story({
  render: exampleRender(Examples.Horizontal),
});

export const ScrollFade = meta.story({
  render: exampleRender(Examples.ScrollFade),
});

export const BothDirections = meta.story({
  render: exampleRender(Examples.BothDirections),
});

export const Nested = meta.story({
  render: exampleRender(Examples.Nested),
});

export const Default = meta.story({
  render: exampleRender(Examples.Default),
});
