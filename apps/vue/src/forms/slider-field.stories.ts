import { SliderField } from "@pisagor/vue-form";
import * as Examples from "@pisagor/vue-form/slider-field/examples";
import { fn } from "storybook/test";
import { exampleRender } from "#/storybook/example-render";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: SliderField,
  parameters: {
    docs: {
      description: {
        component: "Combines Field and Slider for numeric range input with validation.",
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
  render: (args) => ({
    components: { SliderField },
    setup: () => ({ args }),
    template: `<SliderField v-bind="args" />`,
  }),
  tags: ["autodocs"],
});

export const Disabled = meta.story({
  render: exampleRender(Examples.Disabled),
});

export const Invalid = meta.story({
  render: exampleRender(Examples.Invalid),
});
