import { Progress } from "@pisagor/vue";
import * as Examples from "@pisagor/vue/progress/examples";
import { exampleRender } from "#/storybook/example-render";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: Progress,
  parameters: {
    docs: {
      description: {
        component:
          "Shows how complete a task is along a track, including indeterminate loading when progress is unknown.",
      },
    },
  },
  title: "Components/Feedback/Progress",
});

export const Playground = meta.story({
  tags: ["autodocs"],
});

export const OrientationHorizontal = meta.story({
  render: exampleRender(Examples.OrientationHorizontal),
});

export const OrientationVertical = meta.story({
  render: exampleRender(Examples.OrientationVertical),
});

export const WithLabel = meta.story({
  render: exampleRender(Examples.WithLabel),
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
