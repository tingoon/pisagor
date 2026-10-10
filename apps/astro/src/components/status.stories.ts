import { Status } from "@pisagor/astro";
import * as Examples from "#/astro/examples/status";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: Status,
  parameters: {
    docs: {
      description: {
        component: "Shows a compact status indicator for presence or state.",
      },
    },
  },
  title: "Components/Feedback/Status",
});

export const Playground = meta.story({
  tags: ["autodocs"],
});

export const Variants = meta.story({
  render: () => ({ component: Examples.Variants }),
});

export const Sizes = meta.story({
  render: () => ({ component: Examples.Sizes }),
});

export const WithIcon = meta.story({
  render: () => ({ component: Examples.WithIcon }),
});

export const CustomColor = meta.story({
  render: () => ({ component: Examples.CustomColor }),
});

export const CustomSize = meta.story({
  render: () => ({ component: Examples.CustomSize }),
});

export const CustomRecipe = meta.story({
  render: () => ({ component: Examples.CustomRecipe }),
});
