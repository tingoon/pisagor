import { NumberInput } from "@pisagor/vue";
import * as Examples from "@pisagor/vue/number-input/examples";
import { exampleRender } from "#/storybook/example-render";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: NumberInput,
  parameters: {
    docs: {
      description: {
        component:
          "Captures numeric values with optional steppers and validation for quantities and settings.",
      },
    },
  },
  title: "Components/Forms/Number Input",
});

export const Playground = meta.story({
  tags: ["autodocs"],
});

export const Sizes = meta.story({
  render: exampleRender(Examples.Sizes),
});

export const Variants = meta.story({
  render: exampleRender(Examples.Variants),
});

export const OnSurface = meta.story({
  render: exampleRender(Examples.OnSurface),
});

export const WithField = meta.story({
  render: exampleRender(Examples.WithField),
});

export const FieldOnly = meta.story({
  render: exampleRender(Examples.FieldOnly),
});

export const Formatted = meta.story({
  render: exampleRender(Examples.Formatted),
});

export const MouseWheel = meta.story({
  render: exampleRender(Examples.MouseWheel),
});

export const Range = meta.story({
  render: exampleRender(Examples.Range),
});

export const Compound = meta.story({
  render: exampleRender(Examples.Compound),
});

export const WithScrubber = meta.story({
  render: exampleRender(Examples.WithScrubber),
});

export const Step = meta.story({
  render: exampleRender(Examples.Step),
});

export const Disabled = meta.story({
  render: exampleRender(Examples.Disabled),
});

export const Invalid = meta.story({
  render: exampleRender(Examples.Invalid),
});

export const Controlled = meta.story({
  render: exampleRender(Examples.Controlled),
});

export const Default = meta.story({
  render: exampleRender(Examples.Default),
});
