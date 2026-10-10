import { Progress } from "@pisagor/astro";
import * as Examples from "#/astro/examples/progress";
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
  args: {
    value: 66,
  },
  tags: ["autodocs"],
});

export const Default = meta.story({
  render: () => ({ component: Examples.Default }),
});

export const OrientationHorizontal = meta.story({
  render: () => ({ component: Examples.OrientationHorizontal }),
});

export const OrientationVertical = meta.story({
  render: () => ({ component: Examples.OrientationVertical }),
});

export const WithLabel = meta.story({
  render: () => ({ component: Examples.WithLabel }),
});

export const Indeterminate = meta.story({
  render: () => ({ component: Examples.Indeterminate }),
});

export const CustomRecipe = meta.story({
  render: () => ({ component: Examples.CustomRecipe }),
});
