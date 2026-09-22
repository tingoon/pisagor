import { Input } from "@pisagor/react";
import * as Examples from "@pisagor/react/input/examples";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: Input,
  parameters: {
    docs: {
      description: {
        component:
          "Captures a single line of text from the user for names, search terms, and other short values.",
      },
    },
  },
  title: "Components/Forms/Input",
});

export const Playground = meta.story({
  args: {
    placeholder: "Enter your message",
  },
  tags: ["autodocs"],
});

export const Sizes = meta.story({
  render: Examples.Sizes,
});

export const Variants = meta.story({
  render: Examples.Variants,
});

export const Clearable = meta.story({
  render: Examples.Clearable,
});

export const Disabled = meta.story({
  render: Examples.Disabled,
});

export const Invalid = meta.story({
  render: Examples.Invalid,
});

export const File = meta.story({
  render: Examples.File,
});

export const Controlled = meta.story({
  render: Examples.Controlled,
});

export const Default = meta.story({
  render: Examples.Default,
});
