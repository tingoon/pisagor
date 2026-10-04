import { FormatNumber } from "@pisagor/astro";
import * as Examples from "#/astro/examples/format";
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
  render: () => ({ component: Examples.Default }),
});

export const NumberCompact = meta.story({
  render: () => ({ component: Examples.NumberCompact }),
});

export const RelativeTime = meta.story({
  render: () => ({ component: Examples.RelativeTime }),
});

export const Byte = meta.story({
  render: () => ({ component: Examples.Byte }),
});

export const NumberCurrency = meta.story({
  render: () => ({ component: Examples.NumberCurrency }),
});
