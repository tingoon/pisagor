import { Field, NumberInput } from "@pisagor/react";
import { useState } from "react";
import preview, { SurfaceDecorator } from "#/storybook/preview";

const meta = preview.meta({
  component: NumberInput,
  parameters: {
    docs: {
      description: {
        component:
          "Captures numeric values with optional steppers and validation for quantities and settings.",
      },
    },
    metadata: {
      api: "compound",
      taxonomy: "standard",
    },
  },
  subcomponents: {
    ClearTrigger: NumberInput.ClearTrigger,
    Control: NumberInput.Control,
    DecrementTrigger: NumberInput.DecrementTrigger,
    IncrementTrigger: NumberInput.IncrementTrigger,
    Input: NumberInput.Input,
    Scrubber: NumberInput.Scrubber,
  },
  title: "Components/Forms/Number Input",
});

export const Default = meta.story({
  args: {
    defaultValue: "1",
  },
  render: (args) => (
    <NumberInput {...args}>
      <NumberInput.Control>
        <NumberInput.DecrementTrigger />
        <NumberInput.Input />
        <NumberInput.IncrementTrigger />
      </NumberInput.Control>
    </NumberInput>
  ),
});

export const Sizes = meta.story({
  render: () => (
    <div className="flex flex-col gap-2">
      <NumberInput defaultValue="10" size="sm">
        <NumberInput.Control>
          <NumberInput.DecrementTrigger />
          <NumberInput.Input />
          <NumberInput.IncrementTrigger />
        </NumberInput.Control>
      </NumberInput>
      <NumberInput defaultValue="10" size="md">
        <NumberInput.Control>
          <NumberInput.DecrementTrigger />
          <NumberInput.Input />
          <NumberInput.IncrementTrigger />
        </NumberInput.Control>
      </NumberInput>
      <NumberInput defaultValue="10" size="lg">
        <NumberInput.Control>
          <NumberInput.DecrementTrigger />
          <NumberInput.Input />
          <NumberInput.IncrementTrigger />
        </NumberInput.Control>
      </NumberInput>
    </div>
  ),
});

export const Variants = meta.story({
  render: () => (
    <div className="flex flex-col gap-2">
      <NumberInput defaultValue="1" variant="primary">
        <NumberInput.Control>
          <NumberInput.DecrementTrigger />
          <NumberInput.Input />
          <NumberInput.IncrementTrigger />
        </NumberInput.Control>
      </NumberInput>
      <NumberInput defaultValue="1" variant="secondary">
        <NumberInput.Control>
          <NumberInput.DecrementTrigger />
          <NumberInput.Input />
          <NumberInput.IncrementTrigger />
        </NumberInput.Control>
      </NumberInput>
    </div>
  ),
});

export const OnSurface = Variants.extend({
  decorators: [SurfaceDecorator],
  parameters: { layout: "fullscreen" },
});

export const FieldOnly = meta.story({
  args: {
    defaultValue: "0",
  },
  render: (args) => (
    <NumberInput {...args}>
      <NumberInput.Control>
        <NumberInput.Input />
      </NumberInput.Control>
    </NumberInput>
  ),
});

export const Formatted = meta.story({
  args: {
    defaultValue: "19.00",
    formatOptions: { currency: "USD", style: "currency" },
  },
  render: (args) => (
    <NumberInput {...args}>
      <NumberInput.Control>
        <NumberInput.DecrementTrigger />
        <NumberInput.Input />
        <NumberInput.IncrementTrigger />
      </NumberInput.Control>
    </NumberInput>
  ),
});

export const MouseWheel = meta.story({
  args: {
    allowMouseWheel: true,
    defaultValue: "10",
  },
  render: (args) => (
    <NumberInput {...args}>
      <NumberInput.Control>
        <NumberInput.DecrementTrigger />
        <NumberInput.Input />
        <NumberInput.IncrementTrigger />
      </NumberInput.Control>
    </NumberInput>
  ),
});

export const Range = meta.story({
  args: {
    defaultValue: "5",
    max: 10,
    min: 0,
  },
  render: (args) => (
    <NumberInput {...args}>
      <NumberInput.Control>
        <NumberInput.DecrementTrigger />
        <NumberInput.Input />
        <NumberInput.IncrementTrigger />
      </NumberInput.Control>
    </NumberInput>
  ),
});

export const Scrub = meta.story({
  args: {
    defaultValue: "10",
  },
  render: (args) => (
    <NumberInput {...args}>
      <NumberInput.Scrubber>Quantity</NumberInput.Scrubber>
      <NumberInput.Control>
        <NumberInput.DecrementTrigger />
        <NumberInput.Input />
        <NumberInput.IncrementTrigger />
      </NumberInput.Control>
    </NumberInput>
  ),
});

export const Step = meta.story({
  render: () => (
    <div className="flex flex-col gap-2">
      <NumberInput defaultValue="0" step={5}>
        <Field.Label>Step 5</Field.Label>
        <NumberInput.Control>
          <NumberInput.DecrementTrigger />
          <NumberInput.Input />
          <NumberInput.IncrementTrigger />
        </NumberInput.Control>
      </NumberInput>
      <NumberInput defaultValue="0.1" step={0.1}>
        <Field.Label>Step 0.1</Field.Label>
        <NumberInput.Control>
          <NumberInput.DecrementTrigger />
          <NumberInput.Input />
          <NumberInput.IncrementTrigger />
        </NumberInput.Control>
      </NumberInput>
    </div>
  ),
});

export const Disabled = meta.story({
  args: {
    defaultValue: "1",
    disabled: true,
  },
  render: (args) => (
    <NumberInput {...args}>
      <NumberInput.Control>
        <NumberInput.DecrementTrigger />
        <NumberInput.Input />
        <NumberInput.IncrementTrigger />
      </NumberInput.Control>
    </NumberInput>
  ),
});

export const Invalid = meta.story({
  args: {
    defaultValue: "32",
    invalid: true,
  },
  render: (args) => (
    <NumberInput {...args}>
      <NumberInput.Control>
        <NumberInput.DecrementTrigger />
        <NumberInput.Input />
        <NumberInput.IncrementTrigger />
      </NumberInput.Control>
    </NumberInput>
  ),
});

export const Controlled = meta.story({
  render: () => {
    const [value, setValue] = useState("1");

    const isNumberFive = value === "3";

    return (
      <div className="flex flex-col gap-2 text-center text-sm">
        <p>Select the number 3</p>
        <NumberInput onValueChange={(value) => setValue(String(value))} value={value}>
          <NumberInput.Control>
            <NumberInput.DecrementTrigger />
            <NumberInput.Input />
            <NumberInput.IncrementTrigger />
          </NumberInput.Control>
        </NumberInput>
        <p className="text-center">{isNumberFive ? "✅" : "❌"}</p>
      </div>
    );
  },
});
