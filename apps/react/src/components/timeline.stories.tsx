import { Timeline } from "@pisagor/react";
import * as Examples from "@pisagor/react/timeline/examples";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: Timeline,
  parameters: {
    docs: {
      description: {
        component:
          "Shows a sequence of events or milestones so users can follow progress over time.",
      },
    },
  },
  title: "Components/Data Display/Timeline",
});

export const Playground = meta.story({
  args: {
    items: [
      {
        description: "Repository scaffolded with shared packages.",
        title: "Project created",
      },
      {
        description: "Primitives and form controls published.",
        title: "Design system shipped",
      },
      {
        description: "Apps consume the library in production.",
        title: "First release",
      },
    ],
  },
  tags: ["autodocs"],
});

export const Horizontal = meta.story({
  render: Examples.Horizontal,
});

export const Compound = meta.story({
  render: Examples.Compound,
});

export const Default = meta.story({
  render: Examples.Default,
});
