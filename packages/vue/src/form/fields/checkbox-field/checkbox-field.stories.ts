import { fn } from "storybook/test";
import preview from "#/storybook/preview";
import { CheckboxField } from "./checkbox-field";

const meta = preview.meta({
  component: CheckboxField,
  parameters: {
    docs: {
      description: {
        component:
          "Combines Field and Checkbox with label, description, and optional error message.",
      },
    },
  },
  title: "Forms/Fields/Checkbox Field",
});

export const Default = meta.story({
  args: {
    id: "checkbox-field-terms",
    label: "I accept the terms and conditions",
    onCheckedChange: fn(),
  },
  render: (args) => ({
    components: { CheckboxField },
    setup: () => ({ args }),
    template: `<CheckboxField v-bind="args" />`,
  }),
});

export const Invalid = meta.story({
  args: {
    error: "You must accept the terms to continue.",
    id: "checkbox-field-terms-invalid",
    invalid: true,
    label: "I accept the terms and conditions",
    onCheckedChange: fn(),
  },
  render: (args) => ({
    components: { CheckboxField },
    setup: () => ({ args }),
    template: `<CheckboxField v-bind="args" />`,
  }),
});

export const Disabled = meta.story({
  args: {
    disabled: true,
    id: "checkbox-field-terms-disabled",
    label: "I accept the terms and conditions",
    onCheckedChange: fn(),
  },
  render: (args) => ({
    components: { CheckboxField },
    setup: () => ({ args }),
    template: `<CheckboxField v-bind="args" />`,
  }),
});
