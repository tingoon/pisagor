import { InputOTPRoot, InputOTPSeparator, InputOTPSlot } from "./input-otp";

export type { InputOTPProps, InputOTPRootProps, InputOTPSlotProps } from "./input-otp";

export const InputOTP = Object.assign(InputOTPRoot, {
  Separator: InputOTPSeparator,
  Slot: InputOTPSlot,
});
