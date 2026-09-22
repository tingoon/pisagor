import { DateField } from "@pisagor/vue-form";
import * as Examples from "@pisagor/vue-form/date-field/examples";
import { fn } from "storybook/test";
import { exampleRender } from "#/storybook/example-render";
import preview from "#/storybook/preview";

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

export const Disabled = meta.story({
  render: exampleRender(Examples.Disabled),
});

export const Invalid = meta.story({
  render: exampleRender(Examples.Invalid),
});
