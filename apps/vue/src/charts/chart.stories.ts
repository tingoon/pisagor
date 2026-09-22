import { Chart } from "@pisagor/vue-charts";
import * as Examples from "@pisagor/vue-charts/examples";
import { exampleRender } from "#/storybook/example-render";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: Chart,
  parameters: {
    docs: {
      description: {
        component:
          "Wraps charts in themed, accessible layout so data visualizations match the rest of the interface.",
      },
    },
  },
  title: "Charts/Bar",
});

export const Playground = meta.story({
  render: exampleRender(Examples.Default),
  tags: ["autodocs"],
});
