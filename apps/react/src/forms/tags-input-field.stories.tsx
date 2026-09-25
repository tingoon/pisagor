import { TagsInputField } from "@pisagor/react-form";
import * as Examples from "@pisagor/react-form/tags-input-field/examples";
import { fn } from "storybook/test";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: TagsInputField,
  parameters: {
    docs: {
      description: {
        component:
          "Adds and removes multiple tags with a label and optional validation message.",
      },
    },
  },
  title: "Forms/Fields/Tags Input Field",
});

export const Playground = meta.story({
  args: {
    id: "tags-input-field-skills",
    label: "Skills",
    onValueChange: fn(),
    placeholder: "Add a skill",
  },
  tags: ["autodocs"],
});

export const Disabled = meta.story({
  render: Examples.Disabled,
});

export const Invalid = meta.story({
  render: Examples.Invalid,
});
