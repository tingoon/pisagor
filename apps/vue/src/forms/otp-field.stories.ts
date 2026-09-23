import { OtpField } from "@pisagor/vue-form";
import * as Examples from "@pisagor/vue-form/otp-field/examples";
import { fn } from "storybook/test";
import { exampleRender } from "#/storybook/example-render";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: OtpField,
  parameters: {
    docs: {
      description: {
        component:
          "Combines Field and InputOTP with separate digit slots and optional error message.",
      },
    },
  },
  title: "Forms/Fields/OTP Field",
});

export const Playground = meta.story({
  render: () => ({
    components: { OtpField },
    setup: () => ({ onValueChange: fn() }),
    template: `<OtpField class="items-center" label="Verification code" :on-value-change="onValueChange" />`,
  }),
  tags: ["autodocs"],
});

export const Disabled = meta.story({
  render: exampleRender(Examples.Disabled),
});

export const Invalid = meta.story({
  render: exampleRender(Examples.Invalid),
});
