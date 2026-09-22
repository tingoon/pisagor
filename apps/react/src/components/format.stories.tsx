import { Format } from "@pisagor/react";
import * as Examples from "@pisagor/react/format/examples";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: Format.Number,
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
  render: Examples.Default,
  tags: ["autodocs"],
});

export const Default = meta.story({
  render: Examples.Default,
});

export const ByteUnitDisplay = meta.story({
  render: Examples.ByteUnitDisplay,
});

export const ByteUnitSystem = meta.story({
  render: Examples.ByteUnitSystem,
});

export const Byte = meta.story({
  render: Examples.Byte,
});

export const NumberCompact = meta.story({
  render: Examples.NumberCompact,
});

export const NumberCurrency = meta.story({
  render: Examples.NumberCurrency,
});

export const NumberPercent = meta.story({
  render: Examples.NumberPercent,
});

export const NumberStory = meta.story({
  render: Examples.NumberStory,
});

export const RelativeTimeShort = meta.story({
  render: Examples.RelativeTimeShort,
});

export const RelativeTime = meta.story({
  render: Examples.RelativeTime,
});
