import { TagsInputField } from "@pisagor/vue-form";
import * as Examples from "@pisagor/vue-form/tags-input-field/examples";
import { fn } from "storybook/test";
import { exampleRender } from "#/storybook/example-render";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: TagsInputField,
  parameters: {
    docs: {
      description: {
        component:
          "Combines Field and TagsInput for multi-value tag entry with validation.",
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
  render: (args) => ({
    components: { TagsInputField },
    setup: () => ({ args }),
    template: `<TagsInputField v-bind="args" />`,
  }),
  tags: ["autodocs"],
});

export const Disabled = meta.story({
  render: exampleRender(Examples.Disabled),
});

export const Invalid = meta.story({
  render: exampleRender(Examples.Invalid),
});
