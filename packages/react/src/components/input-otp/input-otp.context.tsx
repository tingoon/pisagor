import type { InputOtpSlots } from "@pisagor/recipes/input-otp";
import { createContext } from "../../internal/utils";

interface InputOTPContextValue {
  slots: InputOtpSlots;
}

export const { InputOTPContext, useInputOTP } = createContext<InputOTPContextValue>()({
  name: "InputOTP",
});
