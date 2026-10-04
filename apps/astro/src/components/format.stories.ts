import { FormatNumber } from "@pisagor/astro";
import DefaultExample from "#/astro/examples/format/default.astro";
import NumberCompactExample from "#/astro/examples/format/number-compact.astro";
import RelativeTimeExample from "#/astro/examples/format/relative-time.astro";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: FormatNumber,
  parameters: {
    docs: {
      description: {
        component:
          "Formats numbers, bytes, and relative times for display so values read naturally in the user locale.",
      },
    },
  },
  title: "Components/Data Display/Format",
});

export const Playground = meta.story({
  tags: ["autodocs"],
});

export const Default = meta.story({
  render: () => ({ component: DefaultExample }),
});

export const NumberCompact = meta.story({
  render: () => ({ component: NumberCompactExample }),
});

export const RelativeTime = meta.story({
  render: () => ({ component: RelativeTimeExample }),
});
