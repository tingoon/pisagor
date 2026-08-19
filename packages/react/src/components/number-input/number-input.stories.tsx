import { Field } from "@pisagor/react/field";
import { NumberInput } from "@pisagor/react/number-input";
import { useState } from "react";
import preview, { SurfaceDecorator } from "#/react/preview";

const meta = preview.meta({
  component: NumberInput,
  parameters: {
    docs: {
      api: "compound",
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
          "Captures numeric values with optional steppers and validation for quantities and settings.",
      },
      taxonomy: "standard",
    },
  },
  subcomponents: {
    ClearTrigger: NumberInput.ClearTrigger,
    Decrement: NumberInput.Decrement,
    Group: NumberInput.Group,
    Increment: NumberInput.Increment,
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
      <NumberInput.Group>
        <NumberInput.Decrement />
        <NumberInput.Input />
        <NumberInput.Increment />
      </NumberInput.Group>
    </NumberInput>
  ),
});

export const Sizes = meta.story({
  render: () => (
    <div className="flex flex-col gap-2">
      <NumberInput defaultValue="10" size="sm">
        <NumberInput.Group>
          <NumberInput.Decrement />
          <NumberInput.Input />
          <NumberInput.Increment />
        </NumberInput.Group>
      </NumberInput>
      <NumberInput defaultValue="10" size="md">
        <NumberInput.Group>
          <NumberInput.Decrement />
          <NumberInput.Input />
          <NumberInput.Increment />
        </NumberInput.Group>
      </NumberInput>
      <NumberInput defaultValue="10" size="lg">
        <NumberInput.Group>
          <NumberInput.Decrement />
          <NumberInput.Input />
          <NumberInput.Increment />
        </NumberInput.Group>
      </NumberInput>
    </div>
  ),
});

export const Variants = meta.story({
  render: () => (
    <div className="flex flex-col gap-2">
      <NumberInput defaultValue="1" variant="primary">
        <NumberInput.Group>
          <NumberInput.Decrement />
          <NumberInput.Input />
          <NumberInput.Increment />
        </NumberInput.Group>
      </NumberInput>
      <NumberInput defaultValue="1" variant="secondary">
        <NumberInput.Group>
          <NumberInput.Decrement />
          <NumberInput.Input />
          <NumberInput.Increment />
        </NumberInput.Group>
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
      <NumberInput.Group>
        <NumberInput.Input />
      </NumberInput.Group>
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
      <NumberInput.Group>
        <NumberInput.Decrement />
        <NumberInput.Input />
        <NumberInput.Increment />
      </NumberInput.Group>
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
      <NumberInput.Group>
        <NumberInput.Decrement />
        <NumberInput.Input />
        <NumberInput.Increment />
      </NumberInput.Group>
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
      <NumberInput.Group>
        <NumberInput.Decrement />
        <NumberInput.Input />
        <NumberInput.Increment />
      </NumberInput.Group>
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
      <NumberInput.Group>
        <NumberInput.Decrement />
        <NumberInput.Input />
        <NumberInput.Increment />
      </NumberInput.Group>
    </NumberInput>
  ),
});

export const Step = meta.story({
  render: () => (
    <div className="flex flex-col gap-6">
      <NumberInput defaultValue="0" step={5}>
        <Field.Label>Step 5</Field.Label>
        <NumberInput.Group>
          <NumberInput.Decrement />
          <NumberInput.Input />
          <NumberInput.Increment />
        </NumberInput.Group>
      </NumberInput>
      <NumberInput defaultValue="0.1" step={0.1}>
        <Field.Label>Step 0.1</Field.Label>
        <NumberInput.Group>
          <NumberInput.Decrement />
          <NumberInput.Input />
          <NumberInput.Increment />
        </NumberInput.Group>
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
      <NumberInput.Group>
        <NumberInput.Decrement />
        <NumberInput.Input />
        <NumberInput.Increment />
      </NumberInput.Group>
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
      <NumberInput.Group>
        <NumberInput.Decrement />
        <NumberInput.Input />
        <NumberInput.Increment />
      </NumberInput.Group>
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
          <NumberInput.Group>
            <NumberInput.Decrement />
            <NumberInput.Input />
            <NumberInput.Increment />
          </NumberInput.Group>
        </NumberInput>
        <p className="text-center">{isNumberFive ? "✅" : "❌"}</p>
      </div>
    );
  },
});
