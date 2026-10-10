import { Stat } from "@pisagor/vue";
import { exampleRender } from "#/storybook/example-render";
import preview from "#/storybook/preview";
import * as Examples from "#/vue/examples/stat";

const meta = preview.meta({
  component: Stat,
  parameters: {
    docs: {
      description: {
        component:
          "Displays a metric with supporting context so users can quickly scan performance and changes.",
      },
    },
  },
  title: "Components/Data Display/Stat",
});

export const Playground = meta.story({
  tags: ["autodocs"],
});

export const Default = meta.story({
  render: exampleRender(Examples.Default),
});

export const Variants = meta.story({
  render: exampleRender(Examples.Variants),
});

export const WithTrend = meta.story({
  render: exampleRender(Examples.WithTrend),
});

export const Compound = meta.story({
  render: exampleRender(Examples.Compound),
});

export const CustomRecipe = meta.story({
  render: exampleRender(Examples.CustomRecipe),
});
