import { Slider } from "@pisagor/vue";
import * as Examples from "@pisagor/vue/slider/examples";
import { exampleRender } from "#/storybook/example-render";
import preview from "#/storybook/preview";

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

export const OnSurface = meta.story({
  render: exampleRender(Examples.OnSurface),
});

export const Marks = meta.story({
  render: exampleRender(Examples.Marks),
});

export const MinMax = meta.story({
  render: exampleRender(Examples.MinMax),
});

export const Range = meta.story({
  render: exampleRender(Examples.Range),
});

export const Step = meta.story({
  render: exampleRender(Examples.Step),
});

export const Vertical = meta.story({
  render: exampleRender(Examples.Vertical),
});

export const WithLabel = meta.story({
  render: exampleRender(Examples.WithLabel),
});

export const Invalid = meta.story({
  render: exampleRender(Examples.Invalid),
});

export const Disabled = meta.story({
  render: exampleRender(Examples.Disabled),
});

export const Controlled = meta.story({
  render: exampleRender(Examples.Controlled),
});

export const Default = meta.story({
  render: exampleRender(Examples.Default),
});
