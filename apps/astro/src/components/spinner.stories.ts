import { Spinner } from "@pisagor/astro/spinner";
import DefaultExample from "@pisagor/astro/spinner/examples/default.astro";
import SizesExample from "@pisagor/astro/spinner/examples/sizes.astro";

export default {
  component: Spinner,
  parameters: {
    docs: {
      description: {
        component: "Shows that content or an action is still loading.",
      },
    },
  },
  title: "Components/Feedback/Spinner",
};

export const Playground = {
  tags: ["autodocs"],
};

export const Default = {
  render: () => ({ component: DefaultExample }),
};

export const Sizes = {
  render: () => ({ component: SizesExample }),
};
