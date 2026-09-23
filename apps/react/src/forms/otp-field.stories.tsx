import { OtpField } from "@pisagor/react-form";
import * as Examples from "@pisagor/react-form/otp-field/examples";
import { fn } from "storybook/test";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: OtpField,
  parameters: {
    docs: {
      description: {
        component:
          "Collects a one-time code across separate digit slots with optional validation message.",
      },
    },
  },
  title: "Forms/Fields/OTP Field",
});

export const Playground = meta.story({
  args: {
    className: "items-center",
    label: "Verification code",
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
