import { SelectField } from "@pisagor/vue-form";
import * as Examples from "@pisagor/vue-form/select-field/examples";
import { fn } from "storybook/test";
import { exampleRender } from "#/storybook/example-render";
import { countryOptions } from "#/storybook/fixtures";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: SelectField,
  parameters: {
    docs: {
      description: {
        component: "Combines Field and Select with label, helper text, and optional error message.",
      },
    },
  },
  title: "Forms/Fields/Select Field",
});

export const Playground = meta.story({
  args: {
    description: "Used for shipping estimates.",
    id: "select-field-country",
    items: countryOptions,
    label: "Country",
    onValueChange: fn(),
    placeholder: "Select a country",
  },
  render: (args) => ({
    components: { SelectField },
    setup: () => ({ args }),
    template: `<SelectField v-bind="args" />`,
  }),
  tags: ["autodocs"],
});

export const Disabled = meta.story({
  render: exampleRender(Examples.Disabled),
});

export const Invalid = meta.story({
  render: exampleRender(Examples.Invalid),
});
