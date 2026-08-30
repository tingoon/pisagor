import { fn } from "storybook/test";
import preview from "#/storybook/preview";
import { DateField } from "./date-field";

const meta = preview.meta({
  component: DateField,
  parameters: {
    docs: {
      description: {
        component: "Picks a date from a calendar with label and optional validation message.",
      },
    },
  },
  title: "Forms/Fields/Date Field",
});

export const Default = meta.story({
  args: {
    description: "Pick your preferred project kickoff date.",
    id: "date-field-start-date",
    label: "Start date",
    onValueChange: fn(),
    placeholder: "Select a date",
  },
});

export const Invalid = meta.story({
  args: {
    error: "Please choose a date.",
    id: "date-field-start-date-invalid",
    invalid: true,
    label: "Start date",
    onValueChange: fn(),
  },
});

export const Disabled = meta.story({
  args: {
    description: "Pick your preferred project kickoff date.",
    disabled: true,
    id: "date-field-start-date-disabled",
    label: "Start date",
    onValueChange: fn(),
    placeholder: "Select a date",
  },
});
