import { Surface } from "@pisagor/vue";
import * as Examples from "@pisagor/vue/surface/examples";
import { exampleRender } from "#/storybook/example-render";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: Surface,
  parameters: {
    docs: {
      description: {
        component:
          "Provides a semantic background layer for grouped content such as cards and panels, with automatic elevation for nested sections.",
      },
    },
  },
  title: "Components/Layout/Surface",
});

export const Playground = meta.story({
  tags: ["autodocs"],
});

export const Variants = meta.story({
  render: exampleRender(Examples.Variants),
});

export const Padding = meta.story({
  render: exampleRender(Examples.Padding),
});

export const Nested = meta.story({
  render: exampleRender(Examples.Nested),
});

export const WithFormControls = meta.story({
  render: exampleRender(Examples.WithFormControls),
});

export const Default = meta.story({
  render: exampleRender(Examples.Default),
});
