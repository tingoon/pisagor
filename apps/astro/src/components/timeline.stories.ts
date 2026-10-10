import { Timeline } from "@pisagor/astro";
import * as Examples from "#/astro/examples/timeline";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: Timeline,
  parameters: {
    docs: {
      description: {
        component:
          "Shows a sequence of events with indicators and supporting detail.",
      },
    },
  },
  title: "Components/Data Display/Timeline",
});

export const Playground = meta.story({
  args: {
    items: [
      {
        description: "Your application was received.",
        indicator: "1",
        title: "Application submitted",
      },
      {
        description: "A teammate is reviewing your details.",
        indicator: "2",
        title: "Under review",
      },
      {
        description: "You're ready to continue.",
        indicator: "3",
        title: "Approved",
      },
    ],
  },
  tags: ["autodocs"],
});

export const Default = meta.story({
  render: () => ({ component: Examples.Default }),
});

export const Horizontal = meta.story({
  render: () => ({ component: Examples.Horizontal }),
});

export const Compound = meta.story({
  render: () => ({ component: Examples.Compound }),
});
