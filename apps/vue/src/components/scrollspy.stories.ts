import { Scrollspy } from "@pisagor/vue";
import * as Examples from "@pisagor/vue/scrollspy/examples";
import { exampleRender } from "#/storybook/example-render";
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
  tags: ["autodocs"],
});

export const Horizontal = meta.story({
  render: exampleRender(Examples.Horizontal),
});

export const Default = meta.story({
  render: exampleRender(Examples.Default),
});
