import { fn } from "storybook/test";
import preview from "#/storybook/preview";
import { DateField } from "./date-field";

const meta = preview.meta({
  component: DateField,
  parameters: {
    docs: {
      checklist: {
        accessibleColor: true,
        definedBehaviors: true,
        definedOptions: true,
        interactiveStates: true,
        keyboardInteractions: true,
        platformScales: true,
      },
      description: {
        component:
          "Combines Field and DatePicker with inline input, calendar popover, and optional error message.",
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
