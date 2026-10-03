import { CircularProgress } from "@pisagor/astro/circular-progress";
import DefaultExample from "#/astro/examples/circular-progress/default.astro";
import IndeterminateExample from "#/astro/examples/circular-progress/indeterminate.astro";
import WithValueExample from "#/astro/examples/circular-progress/with-value.astro";

export default {
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

export const WithValue = {
  render: () => ({ component: WithValueExample }),
};
