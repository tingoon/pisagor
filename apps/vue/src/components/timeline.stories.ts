import { Timeline } from "@pisagor/vue";
import * as Examples from "@pisagor/vue/timeline/examples";
import { exampleRender } from "#/storybook/example-render";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: Timeline,
  parameters: {
    docs: {
      description: {
        component: "Displays milestones and progress over time in a compact, scannable layout.",
      },
    },
  },
  title: "Components/Data Display/Timeline",
});

export const Playground = meta.story({
  tags: ["autodocs"],
});

export const Horizontal = meta.story({
  render: exampleRender(Examples.Horizontal),
});

export const Compound = meta.story({
  render: exampleRender(Examples.Compound),
});

export const Default = meta.story({
  render: exampleRender(Examples.Default),
});
