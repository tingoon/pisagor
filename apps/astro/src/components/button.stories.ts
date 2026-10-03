import { Button } from "@pisagor/astro/button";
import DefaultExample from "#/astro/examples/button/default.astro";
import DisabledExample from "#/astro/examples/button/disabled.astro";
import LoadingExample from "#/astro/examples/button/loading.astro";
import SizesExample from "#/astro/examples/button/sizes.astro";
import VariantsExample from "#/astro/examples/button/variants.astro";

export default {
  component: Button,
  parameters: {
    docs: {
      description: {
        component:
          "Triggers an action or navigation with clear hierarchy and loading feedback.",
      },
    },
  },
  title: "Components/Actions/Button",
};

export const Playground = {
  args: {
    slots: { default: "Button" },
  },
  tags: ["autodocs"],
};

export const Default = {
  render: () => ({ component: DefaultExample }),
};

export const Sizes = {
  render: () => ({ component: SizesExample }),
};

export const Variants = {
  render: () => ({ component: VariantsExample }),
};

export const Loading = {
  render: () => ({ component: LoadingExample }),
};

export const Disabled = {
  render: () => ({ component: DisabledExample }),
};
