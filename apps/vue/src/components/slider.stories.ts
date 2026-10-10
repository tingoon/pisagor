import { Slider } from "@pisagor/vue";
import { exampleRender } from "#/storybook/example-render";
import preview from "#/storybook/preview";
import * as Examples from "#/vue/examples/slider";

const meta = preview.meta({
  component: Slider,
  parameters: {
    docs: {
      description: {
        component:
          "Lets users pick a value along a track by dragging a thumb, optionally with labeled steps.",
      },
    },
  },
  title: "Components/Forms/Slider",
});

export const Playground = meta.story({
  tags: ["autodocs"],
});

export const Variants = meta.story({
  render: exampleRender(Examples.Variants),
});

export const Vertical = meta.story({
  render: exampleRender(Examples.Vertical),
});

export const WithLabel = meta.story({
  render: exampleRender(Examples.WithLabel),
});

export const Marks = meta.story({
  render: exampleRender(Examples.Marks),
});

export const Range = meta.story({
  render: exampleRender(Examples.Range),
});

export const Controlled = meta.story({
  render: exampleRender(Examples.Controlled),
});

export const Disabled = meta.story({
  render: exampleRender(Examples.Disabled),
});

export const Invalid = meta.story({
  render: exampleRender(Examples.Invalid),
});

export const MinMax = meta.story({
  render: exampleRender(Examples.MinMax),
});

export const Step = meta.story({
  render: exampleRender(Examples.Step),
});

export const CustomRecipe = meta.story({
  render: exampleRender(Examples.CustomRecipe),
});
