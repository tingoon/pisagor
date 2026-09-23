import { Format } from "@pisagor/vue";
import * as Examples from "@pisagor/vue/format/examples";
import { exampleRender } from "#/storybook/example-render";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: Format,
  parameters: {
    docs: {
      description: {
        component:
          "Formats byte counts, numbers, and relative dates in a consistent, accessible way.",
      },
    },
  },
  title: "Components/Data Display/Format",
});

export const Playground = meta.story({
  tags: ["autodocs"],
});

export const ByteUnitDisplay = meta.story({
  render: exampleRender(Examples.ByteUnitDisplay),
});

export const ByteUnitSystem = meta.story({
  render: exampleRender(Examples.ByteUnitSystem),
});

export const Byte = meta.story({
  render: exampleRender(Examples.Byte),
});

export const NumberCompact = meta.story({
  render: exampleRender(Examples.NumberCompact),
});

export const NumberCurrency = meta.story({
  render: exampleRender(Examples.NumberCurrency),
});

export const NumberPercent = meta.story({
  render: exampleRender(Examples.NumberPercent),
});

export const NumberStory = meta.story({
  render: exampleRender(Examples.NumberStory),
});

export const RelativeTimeShort = meta.story({
  render: exampleRender(Examples.RelativeTimeShort),
});

export const RelativeTime = meta.story({
  render: exampleRender(Examples.RelativeTime),
});

export const Default = meta.story({
  render: exampleRender(Examples.Default),
});
