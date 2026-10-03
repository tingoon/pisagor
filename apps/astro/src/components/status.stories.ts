import { Status } from "@pisagor/astro/status";
import DefaultExample from "#/astro/examples/status/default.astro";
import VariantsExample from "#/astro/examples/status/variants.astro";

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
