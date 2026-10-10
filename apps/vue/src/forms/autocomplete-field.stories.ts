import { AutocompleteField } from "@pisagor/vue-form";
import { fn } from "storybook/test";
import { exampleRender } from "#/storybook/example-render";
import { cityOptions } from "#/storybook/fixtures";
import preview from "#/storybook/preview";
import * as Examples from "#/vue-form/examples/autocomplete-field";

const meta = preview.meta({
  component: AutocompleteField,
  parameters: {
    docs: {
      description: {
        component:
          "Combines Field and Autocomplete with label, description, and optional error message.",
      },
    },
  },
  title: "Forms/Fields/Autocomplete Field",
});

export const Playground = meta.story({
  args: {
    description: "Start typing to filter options.",
    id: "autocomplete-field-city",
    items: cityOptions,
    label: "City",
    onValueChange: fn(),
  },
  render: (args) => ({
    components: { AutocompleteField },
    setup: () => ({ args }),
    template: `<AutocompleteField v-bind="args" />`,
  }),
  tags: ["autodocs"],
});

export const Default = meta.story({
  render: exampleRender(Examples.Default),
});

export const Disabled = meta.story({
  render: exampleRender(Examples.Disabled),
});

export const Invalid = meta.story({
  render: exampleRender(Examples.Invalid),
});
