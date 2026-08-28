import { useState } from "react";
import preview, { SurfaceDecorator } from "#/storybook/preview";
import { Field, RadioGroup } from "..";

const meta = preview.meta({
  component: RadioGroup,
  parameters: {
    docs: {
      description: {
        component: "Lets users pick exactly one option from a small set of related choices.",
      },
    },
    metadata: {
      api: "compound-shorthand",
      taxonomy: "standard",
    },
  },
  subcomponents: {
    Item: RadioGroup.Item,
    ItemText: RadioGroup.ItemText,
    Label: RadioGroup.Label,
    Root: RadioGroup.Root,
  },
  title: "Components/Forms/Radio Group",
});

export const Default = meta.story({
  args: {
    defaultValue: "1",
    items: [
      { label: "Default", value: "1" },
      { label: "Comfortable", value: "2" },
      { label: "Compact", value: "3" },
    ],
  },
});

export const Variants = meta.story({
  render: () => (
    <div className="flex flex-col gap-2">
      <RadioGroup.Root>
        <RadioGroup.Item value="primary" variant="primary">
          Primary
        </RadioGroup.Item>
      </RadioGroup.Root>
      <RadioGroup.Root>
        <RadioGroup.Item value="secondary" variant="secondary">
          Secondary
        </RadioGroup.Item>
      </RadioGroup.Root>
    </div>
  ),
});

export const OnSurface = Variants.extend({
  decorators: [SurfaceDecorator],
  parameters: { layout: "fullscreen" },
});

export const Disabled = meta.story({
  render: () => (
    <div className="flex flex-wrap gap-2">
      <RadioGroup
        defaultValue="1"
        items={[
          { label: "Default", value: "1" },
          { disabled: true, label: "Comfortable", value: "2" },
          { label: "Compact", value: "3" },
        ]}
      />
      <RadioGroup
        disabled
        items={[
          { label: "Default", value: "1" },
          { label: "Comfortable", value: "2" },
          { label: "Compact", value: "3" },
        ]}
      />
    </div>
  ),
});

export const Invalid = meta.story({
  args: {
    invalid: true,
    items: [
      { label: "Default", value: "default" },
      { label: "Comfortable", value: "comfortable" },
      { label: "Compact", value: "compact" },
    ],
  },
});

export const WithDescription = meta.story({
  render: () => (
    <RadioGroup.Root defaultValue="all">
      <Field>
        <RadioGroup.Item value="all">Default</RadioGroup.Item>
        <Field.Description>Standard spacing for most use cases.</Field.Description>
      </Field>
      <Field>
        <RadioGroup.Item value="mentions">Comfortable</RadioGroup.Item>
        <Field.Description>More space between elements.</Field.Description>
      </Field>
      <Field>
        <RadioGroup.Item value="none">Compact</RadioGroup.Item>
        <Field.Description>Minimal spacing for dense layouts.</Field.Description>
      </Field>
    </RadioGroup.Root>
  ),
});

export const Controlled = meta.story({
  render: () => {
    const [value, setValue] = useState<string | null>(null);

    const isCorrectOption = value === "comfortable";

    return (
      <div className="flex flex-col items-center gap-2 text-center text-sm">
        <p>Select the option comfortable</p>
        <RadioGroup
          items={[
            { label: "Default", value: "default" },
            { label: "Comfortable", value: "comfortable" },
            { label: "Compact", value: "compact" },
          ]}
          onValueChange={setValue}
          value={value}
        />
        <p className="text-center">{isCorrectOption ? "✅" : "❌"}</p>
      </div>
    );
  },
});

export const Compound = meta.story({
  parameters: {
    docs: {
      description: {
        story: "Manual composition with `RadioGroup.Root` when shorthand props are not enough.",
      },
    },
  },
  render: () => (
    <RadioGroup.Root defaultValue="1">
      <RadioGroup.Item value="1">Default</RadioGroup.Item>
      <RadioGroup.Item value="2">Comfortable</RadioGroup.Item>
      <RadioGroup.Item value="3">Compact</RadioGroup.Item>
    </RadioGroup.Root>
  ),
});
