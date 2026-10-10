import { Status } from "@pisagor/vue";
import { exampleRender } from "#/storybook/example-render";
import preview from "#/storybook/preview";
import * as Examples from "#/vue/examples/status";

const meta = preview.meta({
  component: Status,
  parameters: {
    docs: {
      description: {
        component:
          "Signals state with a small colored dot so users can see availability or severity at a glance.",
      },
    },
  },
  title: "Components/Feedback/Status",
});

export const Playground = meta.story({
  tags: ["autodocs"],
});

export const Variants = meta.story({
  render: exampleRender(Examples.Variants),
});

export const Sizes = meta.story({
  render: exampleRender(Examples.Sizes),
});

export const WithIcon = meta.story({
  render: exampleRender(Examples.WithIcon),
});

export const CustomColor = meta.story({
  render: exampleRender(Examples.CustomColor),
});

export const CustomSize = meta.story({
  render: exampleRender(Examples.CustomSize),
});

export const CustomRecipe = meta.story({
  render: exampleRender(Examples.CustomRecipe),
});
