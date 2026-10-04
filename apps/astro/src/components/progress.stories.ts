import { Progress } from "@pisagor/astro";
import DefaultExample from "#/astro/examples/progress/default.astro";
import IndeterminateExample from "#/astro/examples/progress/indeterminate.astro";
import WithLabelExample from "#/astro/examples/progress/with-label.astro";
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
  render: () => ({ component: DefaultExample }),
});

export const Indeterminate = meta.story({
  render: () => ({ component: IndeterminateExample }),
});

export const WithLabel = meta.story({
  render: () => ({ component: WithLabelExample }),
});
