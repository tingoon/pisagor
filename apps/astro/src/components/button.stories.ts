import { Button } from "@pisagor/astro/button";
import DefaultExample from "@pisagor/astro/button/examples/default.astro";
import DisabledExample from "@pisagor/astro/button/examples/disabled.astro";
import LoadingExample from "@pisagor/astro/button/examples/loading.astro";
import SizesExample from "@pisagor/astro/button/examples/sizes.astro";
import VariantsExample from "@pisagor/astro/button/examples/variants.astro";

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
