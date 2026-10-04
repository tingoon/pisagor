import { Button } from "@pisagor/astro";
import * as Examples from "#/astro/examples/button";
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
  render: () => ({ component: Examples.Default }),
});

export const Sizes = meta.story({
  render: () => ({ component: Examples.Sizes }),
});

export const Variants = meta.story({
  render: () => ({ component: Examples.Variants }),
});

export const Loading = meta.story({
  render: () => ({ component: Examples.Loading }),
});

export const Disabled = meta.story({
  render: () => ({ component: Examples.Disabled }),
});

export const Icon = meta.story({
  render: () => ({ component: Examples.Icon }),
});

export const NoClickEffect = meta.story({
  render: () => ({ component: Examples.NoClickEffect }),
});

export const Pill = meta.story({
  render: () => ({ component: Examples.Pill }),
});

export const WithIcon = meta.story({
  render: () => ({ component: Examples.WithIcon }),
});
