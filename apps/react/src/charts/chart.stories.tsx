import { Chart } from "@pisagor/react-charts";
import * as Examples from "@pisagor/react-charts/examples";
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
  render: Examples.Default,
  tags: ["autodocs"],
});
