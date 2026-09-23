import { CircularProgress } from "@pisagor/vue";
import * as Examples from "@pisagor/vue/circular-progress/examples";
import { exampleRender } from "#/storybook/example-render";
import preview from "#/storybook/preview";

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

export const Sizes = meta.story({
  render: exampleRender(Examples.Sizes),
});

export const Thickness = meta.story({
  render: exampleRender(Examples.Thickness),
});

export const WithValue = meta.story({
  render: exampleRender(Examples.WithValue),
});

export const Indeterminate = meta.story({
  render: exampleRender(Examples.Indeterminate),
});

export const Controlled = meta.story({
  render: exampleRender(Examples.Controlled),
});

export const Default = meta.story({
  render: exampleRender(Examples.Default),
});
