import { Alert } from "@pisagor/astro/alert";
import CompoundExample from "#/astro/examples/alert/compound.astro";
import DefaultExample from "#/astro/examples/alert/default.astro";
import VariantsExample from "#/astro/examples/alert/variants.astro";

export default {
  component: Alert,
  parameters: {
    docs: {
      description: {
        component:
          "Surfaces status, warning, or actionable feedback within page flow.",
      },
    },
  },
  title: "Components/Feedback/Alert",
};

export const Playground = {
  args: {
    description: "You can add components to your app using the cli.",
    title: "Heads up!",
  },
  tags: ["autodocs"],
};

export const Compound = {
  render: () => ({ component: CompoundExample }),
};

export const Default = {
  render: () => ({ component: DefaultExample }),
};

export const Variants = {
  render: () => ({ component: VariantsExample }),
};
