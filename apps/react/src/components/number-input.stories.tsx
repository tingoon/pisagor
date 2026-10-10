import { NumberInput } from "@pisagor/react";
import * as Examples from "#/react/examples/number-input";
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
  render: Examples.Variants,
  tags: ["autodocs"],
});

export const Variants = meta.story({
  render: Examples.Variants,
});

export const Sizes = meta.story({
  render: Examples.Sizes,
});

export const Formatted = meta.story({
  render: Examples.Formatted,
});

export const FieldOnly = meta.story({
  render: Examples.FieldOnly,
});

export const Compound = meta.story({
  render: Examples.Compound,
});

export const Controlled = meta.story({
  render: Examples.Controlled,
});

export const Disabled = meta.story({
  render: Examples.Disabled,
});

export const Invalid = meta.story({
  render: Examples.Invalid,
});

export const Range = meta.story({
  render: Examples.Range,
});

export const Step = meta.story({
  render: Examples.Step,
});

export const MouseWheel = meta.story({
  render: Examples.MouseWheel,
});

export const Scrub = meta.story({
  render: Examples.Scrub,
});

export const CustomRecipe = meta.story({
  render: Examples.CustomRecipe,
});
