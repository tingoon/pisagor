import { CircularProgress } from "@pisagor/astro/circular-progress";
import DefaultExample from "#/astro/examples/circular-progress/default.astro";
import IndeterminateExample from "#/astro/examples/circular-progress/indeterminate.astro";
import WithValueExample from "#/astro/examples/circular-progress/with-value.astro";
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
  render: () => ({ component: DefaultExample }),
});

export const Indeterminate = meta.story({
  render: () => ({ component: IndeterminateExample }),
});

export const WithValue = meta.story({
  render: () => ({ component: WithValueExample }),
});
