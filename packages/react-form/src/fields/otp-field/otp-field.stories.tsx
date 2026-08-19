import { fn } from "storybook/test";
import preview from "#/react/preview";
import { OtpField } from "./otp-field";

const meta = preview.meta({
  component: OtpField,
  parameters: {
    docs: {
      checklist: {
        accessibleColor: true,
        definedBehaviors: true,
        definedOptions: true,
        interactiveStates: true,
        keyboardInteractions: true,
        platformScales: true,
      },
      description: {
        component:
          "Combines Field and InputOTP with separate digit slots and optional error message.",
      },
    },
  },
  title: "Forms/Fields/OTP Field",
});

export const Default = meta.story({
  args: {
    className: "items-center",
    label: "Verification code",
    onValueChange: fn(),
  },
});

export const Invalid = meta.story({
  args: {
    className: "items-center",
    error: "Enter the 6-digit code from your email.",
    invalid: true,
    label: "Verification code",
    onValueChange: fn(),
    value: "123",
  },
});

export const Disabled = meta.story({
  args: {
    className: "items-center",
    disabled: true,
    label: "Verification code",
    onValueChange: fn(),
  },
});
