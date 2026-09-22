import { FileField } from "@pisagor/react-form";
import * as Examples from "@pisagor/react-form/file-field/examples";
import { fn } from "storybook/test";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: FileField,
  parameters: {
    docs: {
      description: {
        component: "Uploads one or more files with a label and optional validation message.",
      },
    },
  },
  title: "Forms/Fields/File Field",
});

export const Playground = meta.story({
  args: {
    accept: "image/*",
    id: "file-field-avatar",
    label: "Avatar",
    onValueChange: fn(),
  },
  tags: ["autodocs"],
});

export const Disabled = meta.story({
  render: Examples.Disabled,
});

export const Invalid = meta.story({
  render: Examples.Invalid,
});
