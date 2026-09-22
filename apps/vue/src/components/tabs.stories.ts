import { Tabs } from "@pisagor/vue";
import * as Examples from "@pisagor/vue/tabs/examples";
import { exampleRender } from "#/storybook/example-render";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: Tabs,
  parameters: {
    docs: {
      description: {
        component:
          "Organizes related content into panels that users switch between without leaving the page.",
      },
    },
  },
  title: "Components/Navigation/Tabs",
});

export const Playground = meta.story({
  tags: ["autodocs"],
});

export const Variants = meta.story({
  render: exampleRender(Examples.Variants),
});

export const OrientationHorizontal = meta.story({
  render: exampleRender(Examples.OrientationHorizontal),
});

export const OrientationVertical = meta.story({
  render: exampleRender(Examples.OrientationVertical),
});

export const Disabled = meta.story({
  render: exampleRender(Examples.Disabled),
});

export const WithIcons = meta.story({
  render: exampleRender(Examples.WithIcons),
});

export const Controlled = meta.story({
  render: exampleRender(Examples.Controlled),
});

export const Compound = meta.story({
  render: exampleRender(Examples.Compound),
});

export const Default = meta.story({
  render: exampleRender(Examples.Default),
});
