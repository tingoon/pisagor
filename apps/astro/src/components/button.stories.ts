import { Button } from "@pisagor/astro/button";
import DefaultExample from "#/astro/examples/button/default.astro";
import DisabledExample from "#/astro/examples/button/disabled.astro";
import LoadingExample from "#/astro/examples/button/loading.astro";
import SizesExample from "#/astro/examples/button/sizes.astro";
import VariantsExample from "#/astro/examples/button/variants.astro";
import preview from "#/storybook/preview";

const meta = preview.meta({
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
});

export const Playground = meta.story({
  args: {
    slots: { default: "Button" },
  },
  tags: ["autodocs"],
});

export const Default = meta.story({
  render: () => ({ component: DefaultExample }),
});

export const Sizes = meta.story({
  render: () => ({ component: SizesExample }),
});

export const Variants = meta.story({
  render: () => ({ component: VariantsExample }),
});

export const Loading = meta.story({
  render: () => ({ component: LoadingExample }),
});

export const Disabled = meta.story({
  render: () => ({ component: DisabledExample }),
});
