import { Progress } from "@pisagor/react";
import * as Examples from "@pisagor/react/progress/examples";
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
  render: Examples.Default,
  tags: ["autodocs"],
});

export const OrientationHorizontal = meta.story({
  render: Examples.OrientationHorizontal,
});

export const OrientationVertical = meta.story({
  render: Examples.OrientationVertical,
});

export const WithLabel = meta.story({
  render: Examples.WithLabel,
});

export const Indeterminate = meta.story({
  render: Examples.Indeterminate,
});

export const Controlled = meta.story({
  render: Examples.Controlled,
});

export const Default = meta.story({
  render: Examples.Default,
});
