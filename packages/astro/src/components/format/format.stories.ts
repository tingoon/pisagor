import StoryFrame from "#/storybook/story-frame.astro";
import FormatByte from "./format-byte.astro";
import FormatNumber from "./format-number.astro";
import FormatRelativeTime from "./format-relative-time.astro";

export default {
  component: FormatNumber,
  parameters: {
    docs: {
      description: {
        component:
          "Formats numbers, bytes, and relative times for display so values read naturally in the user locale.",
      },
    },
    metadata: {
      api: "compound",
      taxonomy: "primitive",
    },
  },
  title: "Components/Data Display/Format",
};

export const Default = {
  render: () => ({
    component: StoryFrame,
    props: { class: "flex flex-col gap-1" },
    slots: {
      default: [
        '<span class="text-muted-foreground text-sm">File size</span>',
        '<span class="font-semibold text-2xl text-foreground tabular-nums tracking-tight">',
        { component: FormatByte, props: { value: 120_000 } },
        "</span>",
      ],
    },
  }),
};

export const NumberCompact = {
  args: {
    options: { notation: "compact" },
    value: 1_500_000,
  },
};

export const RelativeTime = {
  render: () => ({
    component: FormatRelativeTime,
    props: {
      value: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3).toISOString(),
    },
  }),
};
