import { TextareaField } from "@pisagor/vue-form";
import { fn } from "storybook/test";
import { exampleRender } from "#/storybook/example-render";
import preview from "#/storybook/preview";
import * as Examples from "#/vue-form/examples/textarea-field";

const meta = preview.meta({
  component: TextareaField,
  parameters: {
    docs: {
      description: {
        component:
          "Combines Field and Textarea with label, description, and optional error message.",
      },
    },
  },
  title: "Forms/Fields/Textarea Field",
});

export const Playground = meta.story({
  args: {
    id: "textarea-field-bio",
    label: "Bio",
    onValueChange: fn(),
    placeholder: "Tell us about yourself…",
  },
  render: (args) => ({
    components: { TextareaField },
    setup: () => ({ args }),
    template: `<TextareaField v-bind="args" />`,
  }),
  tags: ["autodocs"],
});

export const Disabled = meta.story({
  render: exampleRender(Examples.Disabled),
});

export const Invalid = meta.story({
  render: exampleRender(Examples.Invalid),
});
