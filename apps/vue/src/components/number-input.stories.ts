import { NumberInput } from "@pisagor/vue";
import { exampleRender } from "#/storybook/example-render";
import preview from "#/storybook/preview";
import * as Examples from "#/vue/examples/number-input";

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

export const Variants = meta.story({
  render: exampleRender(Examples.Variants),
});

export const Sizes = meta.story({
  render: exampleRender(Examples.Sizes),
});

export const Formatted = meta.story({
  render: exampleRender(Examples.Formatted),
});

export const FieldOnly = meta.story({
  render: exampleRender(Examples.FieldOnly),
});

export const Compound = meta.story({
  render: exampleRender(Examples.Compound),
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

export const Range = meta.story({
  render: exampleRender(Examples.Range),
});

export const Step = meta.story({
  render: exampleRender(Examples.Step),
});

export const MouseWheel = meta.story({
  render: exampleRender(Examples.MouseWheel),
});

export const Scrub = meta.story({
  render: exampleRender(Examples.Scrub),
});

export const CustomRecipe = meta.story({
  render: exampleRender(Examples.CustomRecipe),
});
