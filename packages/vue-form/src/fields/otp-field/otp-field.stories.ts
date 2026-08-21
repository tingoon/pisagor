import { fn } from "storybook/test";
import preview from "#/storybook/preview";
import { OtpField } from "./otp-field";

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

export const Default = meta.story({
  render: () => ({
    components: { OtpField },
    setup: () => ({ onValueChange: fn() }),
    template: `<OtpField class="items-center" label="Verification code" :on-value-change="onValueChange" />`,
  }),
});

export const Invalid = meta.story({
  render: () => ({
    components: { OtpField },
    setup: () => ({ onValueChange: fn() }),
    template: `<OtpField
      class="items-center"
      error="Enter the 6-digit code from your email."
      invalid
      label="Verification code"
      :on-value-change="onValueChange"
      value="123"
    />`,
  }),
});

export const Disabled = meta.story({
  render: () => ({
    components: { OtpField },
    setup: () => ({ onValueChange: fn() }),
    template: `<OtpField
      class="items-center"
      disabled
      label="Verification code"
      :on-value-change="onValueChange"
    />`,
  }),
});
