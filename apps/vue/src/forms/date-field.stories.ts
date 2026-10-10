import { DateField } from "@pisagor/vue-form";
import { fn } from "storybook/test";
import { exampleRender } from "#/storybook/example-render";
import preview from "#/storybook/preview";
import * as Examples from "#/vue-form/examples/date-field";

const meta = preview.meta({
  component: DateField,
  parameters: {
    docs: {
      description: {
        component:
          "Combines Field and DatePicker with inline input, calendar popover, and optional error message.",
      },
    },
  },
  title: "Forms/Fields/Date Field",
});

export const Playground = meta.story({
  args: {
    description: "Pick your preferred project kickoff date.",
    id: "date-field-start-date",
    label: "Start date",
    onValueChange: fn(),
    placeholder: "Select a date",
  },
  render: (args) => ({
    components: { DateField },
    setup: () => ({ args }),
    template: `<DateField v-bind="args" />`,
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
