import { Spinner } from "@pisagor/vue";
import { exampleRender } from "#/storybook/example-render";
import preview from "#/storybook/preview";
import * as Examples from "#/vue/examples/spinner";

const meta = preview.meta({
  component: Spinner,
  parameters: {
    docs: {
      description: {
        component:
          "Shows that something is loading when the wait time is short and a progress bar is not needed.",
      },
    },
  },
  title: "Components/Feedback/Spinner",
});

export const Playground = meta.story({
  tags: ["autodocs"],
});

export const Sizes = meta.story({
  render: exampleRender(Examples.Sizes),
});

export const CustomRecipe = meta.story({
  render: exampleRender(Examples.CustomRecipe),
});
