import { Slider } from "@pisagor/react";
import * as Examples from "@pisagor/react/slider/examples";
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
  args: {
    defaultValue: [20],
  },
  tags: ["autodocs"],
});

export const Variants = meta.story({
  render: Examples.Variants,
});

export const Marks = meta.story({
  render: Examples.Marks,
});

export const MinMax = meta.story({
  render: Examples.MinMax,
});

export const Range = meta.story({
  render: Examples.Range,
});

export const Step = meta.story({
  render: Examples.Step,
});

export const Vertical = meta.story({
  render: Examples.Vertical,
});

export const WithLabel = meta.story({
  render: Examples.WithLabel,
});

export const Invalid = meta.story({
  render: Examples.Invalid,
});

export const Disabled = meta.story({
  render: Examples.Disabled,
});

export const Controlled = meta.story({
  render: Examples.Controlled,
});

export const Default = meta.story({
  render: Examples.Default,
});
