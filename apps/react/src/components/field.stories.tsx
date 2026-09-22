import { Field } from "@pisagor/react";
import * as Examples from "@pisagor/react/field/examples";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: Field,
  parameters: {
    docs: {
      description: {
        component:
          "Wraps a form control with label, description, and error text so inputs are easier to understand and fix.",
      },
    },
  },
  title: "Components/Forms/Field",
});

export const Playground = meta.story({
  render: Examples.Default,
  tags: ["autodocs"],
});

export const Default = meta.story({
  render: Examples.Default,
});

export const OrientationHorizontal = meta.story({
  render: Examples.OrientationHorizontal,
});

export const OrientationVertical = meta.story({
  render: Examples.OrientationVertical,
});

export const AutocompleteField = meta.story({
  render: Examples.AutocompleteField,
});

export const CheckboxField = meta.story({
  render: Examples.CheckboxField,
});

export const CheckboxGroupField = meta.story({
  render: Examples.CheckboxGroupField,
});

export const ComboboxField = meta.story({
  render: Examples.ComboboxField,
});

export const ComboboxMultipleField = meta.story({
  render: Examples.ComboboxMultipleField,
});

export const DisabledField = meta.story({
  render: Examples.DisabledField,
});

export const FieldGroup = meta.story({
  render: Examples.FieldGroup,
});

export const WithInputGroup = meta.story({
  render: Examples.WithInputGroup,
});

export const NumberInputStory = meta.story({
  render: Examples.NumberInputStory,
});

export const RadioGroupField = meta.story({
  render: Examples.RadioGroupField,
});

export const RequiredField = meta.story({
  render: Examples.RequiredField,
});

export const SelectField = meta.story({
  render: Examples.SelectField,
});

export const SliderField = meta.story({
  render: Examples.SliderField,
});

export const SwitchField = meta.story({
  render: Examples.SwitchField,
});

export const TextareaField = meta.story({
  render: Examples.TextareaField,
});

export const WithError = meta.story({
  render: Examples.WithError,
});
