import InputOTPRoot from "./input-otp-root.svelte";
import InputOTPSeparator from "./input-otp-separator.svelte";
import InputOTPSlot from "./input-otp-slot.svelte";

export const InputOTP = Object.assign(InputOTPRoot, {
  Separator: InputOTPSeparator,
  Slot: InputOTPSlot,
});
