import { PhoneField } from "@pisagor/vue-form";
import * as Examples from "@pisagor/vue-form/phone-field/examples";
import { fn } from "storybook/test";
import { exampleRender } from "#/storybook/example-render";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: PhoneField,
  parameters: {
    docs: {
      description: {
        component:
          "Combines Field and PhoneInput with country selection and optional error message.",
      },
    },
  },
  title: "Forms/Fields/Phone Field",
});

export const Playground = meta.story({
  args: {
    defaultCountry: "US",
    id: "phone-field",
    label: "Phone number",
    onValueChange: fn(),
    placeholder: "Enter phone number",
  },
  render: (args) => ({
    components: { PhoneField },
    setup: () => ({ args }),
    template: `<PhoneField v-bind="args" />`,
  }),
  tags: ["autodocs"],
});

export const Disabled = meta.story({
  render: exampleRender(Examples.Disabled),
});

export const Invalid = meta.story({
  render: exampleRender(Examples.Invalid),
});
