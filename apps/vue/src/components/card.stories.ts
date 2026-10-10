import { Card } from "@pisagor/vue";
import { exampleRender } from "#/storybook/example-render";
import preview from "#/storybook/preview";
import * as Examples from "#/vue/examples/card";

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

export const Default = meta.story({
  render: exampleRender(Examples.Default),
});

export const Icon = meta.story({
  render: exampleRender(Examples.Icon),
});

export const Product = meta.story({
  render: exampleRender(Examples.Product),
});

export const CustomSpacing = meta.story({
  render: exampleRender(Examples.CustomSpacing),
});

export const CustomRecipe = meta.story({
  render: exampleRender(Examples.CustomRecipe),
});
