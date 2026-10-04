import { Status } from "@pisagor/astro/status";
import DefaultExample from "#/astro/examples/status/default.astro";
import VariantsExample from "#/astro/examples/status/variants.astro";
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
  render: () => ({ component: DefaultExample }),
});

export const Variants = meta.story({
  render: () => ({ component: VariantsExample }),
});
