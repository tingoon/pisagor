import { fn } from "storybook/test";
import preview from "#/storybook/preview";
import { SliderField } from "./slider-field";

const meta = preview.meta({
  component: SliderField,
  parameters: {
    docs: {
      description: {
        component: "Sets a value along a range with a label and optional validation message.",
      },
    },
  },
  title: "Forms/Fields/Slider Field",
});

export const Default = meta.story({
  args: {
    defaultValue: [40],
    id: "slider-field-opacity",
    label: "Opacity",
    onValueChange: fn(),
    showValue: true,
  },
});

export const Invalid = meta.story({
  args: {
    defaultValue: [10],
    error: "Value is too low.",
    id: "slider-field-opacity-invalid",
    invalid: true,
    label: "Opacity",
    onValueChange: fn(),
    showValue: true,
  },
});

export const Disabled = meta.story({
  args: {
    defaultValue: [40],
    disabled: true,
    id: "slider-field-opacity-disabled",
    label: "Opacity",
    onValueChange: fn(),
    showValue: true,
  },
});
