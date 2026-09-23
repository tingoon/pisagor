import { Status } from "@pisagor/astro/status";
import DefaultExample from "@pisagor/astro/status/examples/default.astro";
import VariantsExample from "@pisagor/astro/status/examples/variants.astro";

export default {
  component: Status,
  parameters: {
    docs: {
      description: {
        component: "Shows a compact status indicator for presence or state.",
      },
    },
  },
  title: "Components/Feedback/Status",
};

export const Playground = {
  tags: ["autodocs"],
};

export const Default = {
  render: () => ({ component: DefaultExample }),
};

export const Variants = {
  render: () => ({ component: VariantsExample }),
};
