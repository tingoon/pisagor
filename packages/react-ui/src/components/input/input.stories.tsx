import { Input } from "@pisagor/react";
import { useState } from "react";
import preview, { SurfaceDecorator } from "#/storybook/preview";

const meta = preview.meta({
  component: Input,
  parameters: {
    docs: {
      description: {
        component:
          "Captures a single line of text from the user for names, search terms, and other short values.",
      },
    },
    metadata: {
      api: "compound",
      taxonomy: "primitive",
    },
  },
  subcomponents: {
    ClearAddon: Input.ClearAddon,
    ClearButton: Input.ClearButton,
  },
  title: "Components/Forms/Input",
});

export const Default = meta.story({
  args: {
    placeholder: "Enter your message",
  },
});

export const Sizes = meta.story({
  render: () => (
    <div className="flex flex-col gap-2">
      <Input placeholder="Small" size="sm" />
      <Input placeholder="Medium" size="md" />
      <Input placeholder="Large" size="lg" />
    </div>
  ),
});

export const Variants = meta.story({
  render: () => (
    <div className="flex flex-col gap-2">
      <Input placeholder="Primary" variant="primary" />
      <Input placeholder="Secondary" variant="secondary" />
    </div>
  ),
});

export const OnSurface = Variants.extend({
  decorators: [SurfaceDecorator],
  parameters: { layout: "fullscreen" },
});

export const Clearable = meta.story({
  render: () => {
    const [value, setValue] = useState("Hello world");

    return (
      <Input
        clearable
        onChange={({ target }) => setValue(target.value)}
        placeholder="Type to search..."
        value={value}
      />
    );
  },
});

export const Disabled = meta.story({
  args: {
    disabled: true,
    placeholder: "you@example.com",
  },
});

export const Invalid = meta.story({
  args: {
    invalid: true,
    placeholder: "you@example.com",
  },
});

export const File = meta.story({
  args: {
    type: "file",
  },
  parameters: {
    docs: {
      description: {
        story: "Prefer `FileInput` for file selection. See Components/Forms/File Input.",
      },
    },
  },
});

export const Controlled = meta.story({
  render: () => {
    const [value, setValue] = useState("");

    return (
      <Input
        onChange={({ target }) => setValue(target.value)}
        placeholder="Enter your message"
        value={value}
      />
    );
  },
});
