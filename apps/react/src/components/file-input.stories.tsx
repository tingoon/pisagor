import { FileInput } from "@pisagor/react";
import * as Examples from "@pisagor/react/file-input/examples";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: FileInput,
  parameters: {
    docs: {
      description: {
        component:
          "Captures one or more files from the user with native file-picker styling aligned to Input.",
      },
    },
  },
  title: "Components/Forms/File Input",
});

export const Playground = meta.story({
  render: Examples.Default,
  tags: ["autodocs"],
});

export const Default = meta.story({
  render: Examples.Default,
});

export const Variants = meta.story({
  render: Examples.Variants,
});

export const Multiple = meta.story({
  render: Examples.Multiple,
});

export const Accept = meta.story({
  render: Examples.Accept,
});

export const Disabled = meta.story({
  render: Examples.Disabled,
});

export const Invalid = meta.story({
  render: Examples.Invalid,
});

export const OnFilesChange = meta.story({
  render: Examples.OnFilesChange,
});

export const Sizes = meta.story({
  render: Examples.Sizes,
});
