import { fn } from "storybook/test";
import preview from "#/storybook/preview";
import { RadioGroupField } from "./radio-group-field";

const meta = preview.meta({
  component: RadioGroupField,
  parameters: {
    docs: {
      description: {
        component:
          "Combines Field and RadioGroup for selecting one option with optional error message.",
      },
    },
  },
  title: "Forms/Fields/Radio Group Field",
});

export const Default = meta.story({
  args: {
    description: "You can change this anytime in billing settings.",
    id: "radio-group-field-plan",
    label: "Plan",
    onValueChange: fn(),
    options: planOptions(),
  },
});

export const Invalid = meta.story({
  args: {
    error: "Please select a plan.",
    id: "radio-group-field-plan-invalid",
    invalid: true,
    label: "Plan",
    onValueChange: fn(),
    options: planOptions(),
  },
});

export const Disabled = meta.story({
  args: {
    description: "You can change this anytime in billing settings.",
    disabled: true,
    id: "radio-group-field-plan-disabled",
    label: "Plan",
    onValueChange: fn(),
    options: planOptions(),
  },
});

function planOptions() {
  return [
    {
      description: "For individuals and hobby projects.",
      label: "Starter",
      value: "starter",
    },
    {
      description: "For teams collaborating across projects.",
      label: "Pro",
      value: "pro",
    },
    {
      description: "For enterprise-grade scale and governance.",
      label: "Enterprise",
      value: "enterprise",
    },
  ];
}
