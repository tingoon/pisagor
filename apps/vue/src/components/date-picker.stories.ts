import { DatePicker } from "@pisagor/vue";
import { exampleRender } from "#/storybook/example-render";
import preview from "#/storybook/preview";
import * as Examples from "#/vue/examples/date-picker";

const meta = preview.meta({
  component: DatePicker,
  parameters: {
    docs: {
      description: {
        component: "Pick a date from a calendar popover.",
      },
    },
  },
  title: "Components/Forms/Date Picker",
});

export const Playground = meta.story({
  tags: ["autodocs"],
});

export const Variants = meta.story({
  render: exampleRender(Examples.Variants),
});

export const Range = meta.story({
  render: exampleRender(Examples.Range),
});

export const CustomFormat = meta.story({
  render: exampleRender(Examples.CustomFormat),
});

export const Input = meta.story({
  render: exampleRender(Examples.Input),
});

export const Invalid = meta.story({
  render: exampleRender(Examples.Invalid),
});

export const Disabled = meta.story({
  render: exampleRender(Examples.Disabled),
});

export const Clearable = meta.story({
  render: exampleRender(Examples.Clearable),
});

export const Time = meta.story({
  render: exampleRender(Examples.Time),
});

export const WithPresets = meta.story({
  render: exampleRender(Examples.WithPresets),
});

export const Default = meta.story({
  render: exampleRender(Examples.Default),
});
