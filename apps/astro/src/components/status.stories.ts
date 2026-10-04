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

export const Default = meta.story({
  render: () => ({ component: Examples.Default }),
});

export const Variants = meta.story({
  render: () => ({ component: Examples.Variants }),
});

export const Sizes = meta.story({
  render: () => ({ component: Examples.Sizes }),
});
