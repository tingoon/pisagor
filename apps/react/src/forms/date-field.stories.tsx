import { DateField } from "@pisagor/react-form";
import * as Examples from "@pisagor/react-form/date-field/examples";
import { fn } from "storybook/test";
import preview from "#/storybook/preview";

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

export const Playground = meta.story({
  args: {
    description: "Pick your preferred project kickoff date.",
    id: "date-field-start-date",
    label: "Start date",
    onValueChange: fn(),
    placeholder: "Select a date",
  },
  tags: ["autodocs"],
});

export const Disabled = meta.story({
  render: Examples.Disabled,
});

export const Invalid = meta.story({
  render: Examples.Invalid,
});
