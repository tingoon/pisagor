import { FormatNumber } from "@pisagor/astro/format";
import DefaultExample from "@pisagor/astro/format/examples/default.astro";
import NumberCompactExample from "@pisagor/astro/format/examples/number-compact.astro";
import RelativeTimeExample from "@pisagor/astro/format/examples/relative-time.astro";

export default {
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
};

export const Playground = {
  tags: ["autodocs"],
};

export const Default = {
  render: () => ({ component: DefaultExample }),
};

export const NumberCompact = {
  render: () => ({ component: NumberCompactExample }),
};

export const RelativeTime = {
  render: () => ({ component: RelativeTimeExample }),
};
