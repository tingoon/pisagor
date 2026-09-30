import { Progress } from "@pisagor/astro/progress";
import DefaultExample from "#/astro/examples/progress/default.astro";
import IndeterminateExample from "#/astro/examples/progress/indeterminate.astro";
import WithLabelExample from "#/astro/examples/progress/with-label.astro";

export default {
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
};

export const Playground = {
  args: {
    value: 66,
  },
  tags: ["autodocs"],
};

export const Default = {
  render: () => ({ component: DefaultExample }),
};

export const Indeterminate = {
  render: () => ({ component: IndeterminateExample }),
};

export const WithLabel = {
  render: () => ({ component: WithLabelExample }),
};
