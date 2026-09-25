import { SliderField } from "@pisagor/react-form";
import * as Examples from "@pisagor/react-form/slider-field/examples";
import { fn } from "storybook/test";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: SliderField,
  parameters: {
    docs: {
      description: {
        component:
          "Sets a value along a range with a label and optional validation message.",
      },
    },
  },
  title: "Forms/Fields/Slider Field",
});

export const Playground = meta.story({
  args: {
    defaultValue: [40],
    id: "slider-field-opacity",
    label: "Opacity",
    onValueChange: fn(),
    showValue: true,
  },
  tags: ["autodocs"],
});

export const Disabled = meta.story({
  render: Examples.Disabled,
});

export const Invalid = meta.story({
  render: Examples.Invalid,
});
