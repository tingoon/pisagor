import { DatePicker } from "@pisagor/react";
import * as Examples from "@pisagor/react/date-picker/examples";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: DatePicker,
  parameters: {
    docs: {
      description: {
        component: "Lets users pick a date or range from a calendar inside a field or popover.",
      },
    },
  },
  title: "Components/Forms/Date Picker",
});

export const Playground = meta.story({
  render: Examples.Default,
  tags: ["autodocs"],
});

export const Default = meta.story({
  render: Examples.Default,
});

export const Variants = meta.story({
  render: Examples.Variants,
});

export const Range = meta.story({
  render: Examples.Range,
});

export const CustomFormat = meta.story({
  render: Examples.CustomFormat,
});

export const Input = meta.story({
  render: Examples.Input,
});

export const Invalid = meta.story({
  render: Examples.Invalid,
});

export const Disabled = meta.story({
  render: Examples.Disabled,
});

export const Clearable = meta.story({
  render: Examples.Clearable,
});

export const Time = meta.story({
  render: Examples.Time,
});

export const WithPresets = meta.story({
  render: Examples.WithPresets,
});
