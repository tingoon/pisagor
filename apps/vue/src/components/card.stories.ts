import { Card } from "@pisagor/vue";
import * as Examples from "@pisagor/vue/card/examples";
import { exampleRender } from "#/storybook/example-render";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: Card,
  parameters: {
    docs: {
      description: {
        component:
          "Groups related content and actions into a contained surface that people can scan and compare.",
      },
    },
  },
  title: "Components/Layout/Card",
});

export const Playground = meta.story({
  tags: ["autodocs"],
});

export const CustomSpacing = meta.story({
  render: exampleRender(Examples.CustomSpacing),
});

export const Icon = meta.story({
  render: exampleRender(Examples.Icon),
});

export const Product = meta.story({
  render: exampleRender(Examples.Product),
});

export const Default = meta.story({
  render: exampleRender(Examples.Default),
});
