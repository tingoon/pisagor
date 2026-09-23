import { Status } from "@pisagor/vue";
import * as Examples from "@pisagor/vue/status/examples";
import { exampleRender } from "#/storybook/example-render";
import preview from "#/storybook/preview";

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

export const CustomColor = meta.story({
  render: exampleRender(Examples.CustomColor),
});

export const CustomSize = meta.story({
  render: exampleRender(Examples.CustomSize),
});

export const WithIcon = meta.story({
  render: exampleRender(Examples.WithIcon),
});

export const Default = meta.story({
  render: exampleRender(Examples.Default),
});

export const Sizes = meta.story({
  render: exampleRender(Examples.Sizes),
});
