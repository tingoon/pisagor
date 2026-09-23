import { CircularProgress } from "@pisagor/react";
import * as Examples from "@pisagor/react/circular-progress/examples";
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
  render: Examples.Default,
  tags: ["autodocs"],
});

export const Sizes = meta.story({
  render: Examples.Sizes,
});

export const Thickness = meta.story({
  render: Examples.Thickness,
});

export const WithValue = meta.story({
  render: Examples.WithValue,
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
