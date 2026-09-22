import { Field } from "@pisagor/vue";
import * as Examples from "@pisagor/vue/field/examples";
import { exampleRender } from "#/storybook/example-render";
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
  tags: ["autodocs"],
});

export const OnSurface = meta.story({
  render: exampleRender(Examples.OnSurface),
});

export const OrientationHorizontal = meta.story({
  render: exampleRender(Examples.OrientationHorizontal),
});

export const OrientationVertical = meta.story({
  render: exampleRender(Examples.OrientationVertical),
});

export const AutocompleteField = meta.story({
  render: exampleRender(Examples.AutocompleteField),
});

export const CheckboxField = meta.story({
  render: exampleRender(Examples.CheckboxField),
});

export const CheckboxGroupField = meta.story({
  render: exampleRender(Examples.CheckboxGroupField),
});

export const ComboboxField = meta.story({
  render: exampleRender(Examples.ComboboxField),
});

export const ComboboxMultipleField = meta.story({
  render: exampleRender(Examples.ComboboxMultipleField),
});

export const DisabledField = meta.story({
  render: exampleRender(Examples.DisabledField),
});

export const FieldGroup = meta.story({
  render: exampleRender(Examples.FieldGroup),
});

export const WithInputGroup = meta.story({
  render: exampleRender(Examples.WithInputGroup),
});

export const NumberInputStory = meta.story({
  render: exampleRender(Examples.NumberInputStory),
});

export const RadioGroupField = meta.story({
  render: exampleRender(Examples.RadioGroupField),
});

export const RequiredField = meta.story({
  render: exampleRender(Examples.RequiredField),
});

export const SelectField = meta.story({
  render: exampleRender(Examples.SelectField),
});

export const SliderField = meta.story({
  render: exampleRender(Examples.SliderField),
});

export const SwitchField = meta.story({
  render: exampleRender(Examples.SwitchField),
});

export const TextareaField = meta.story({
  render: exampleRender(Examples.TextareaField),
});

export const WithError = meta.story({
  render: exampleRender(Examples.WithError),
});

export const WithSeparator = meta.story({
  render: exampleRender(Examples.WithSeparator),
});

export const Default = meta.story({
  render: exampleRender(Examples.Default),
});
