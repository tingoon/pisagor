import { CircularProgress } from "@pisagor/vue";
import { exampleRender } from "#/storybook/example-render";
import preview from "#/storybook/preview";
import * as Examples from "#/vue/examples/circular-progress";

const meta = preview.meta({
  component: CircularProgress,
  parameters: {
    docs: {
      description: {
        component:
          "Shows how far along a task is on a circular track, including indeterminate loading when the duration is unknown.",
      },
    },
  },
  title: "Components/Feedback/Circular Progress",
});

export const Playground = meta.story({
  tags: ["autodocs"],
});

export const Default = meta.story({
  render: exampleRender(Examples.Default),
});

export const Sizes = meta.story({
  render: exampleRender(Examples.Sizes),
});

export const Thickness = meta.story({
  render: exampleRender(Examples.Thickness),
});

export const WithValue = meta.story({
  render: exampleRender(Examples.WithValue),
});

export const Controlled = meta.story({
  render: exampleRender(Examples.Controlled),
});

export const Indeterminate = meta.story({
  render: exampleRender(Examples.Indeterminate),
});

export const CustomRecipe = meta.story({
  render: exampleRender(Examples.CustomRecipe),
});
