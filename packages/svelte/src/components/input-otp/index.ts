import InputOTPShorthand from "./input-otp.svelte";
import Control from "./input-otp-control.svelte";
import Input from "./input-otp-input.svelte";
import Label from "./input-otp-label.svelte";
import Root from "./input-otp-root.svelte";
import Separator from "./input-otp-separator.svelte";

export type {
  PinInputControlProps as InputOTPControlProps,
  PinInputLabelProps as InputOTPLabelProps,
} from "@ark-ui/svelte";

export const InputOTP = Object.assign(InputOTPShorthand, {
  Control,
  Input,
  Label,
  Root,
  Separator,
});
