import { CircularProgress } from "@pisagor/astro";
import * as Examples from "#/astro/examples/circular-progress";
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
  args: {
    value: 66,
  },
  tags: ["autodocs"],
});

export const Default = meta.story({
  render: () => ({ component: Examples.Default }),
});

export const Indeterminate = meta.story({
  render: () => ({ component: Examples.Indeterminate }),
});

export const WithValue = meta.story({
  render: () => ({ component: Examples.WithValue }),
});

export const Sizes = meta.story({
  render: () => ({ component: Examples.Sizes }),
});
