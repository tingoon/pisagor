import type { InputOtpVariants } from "@pisagor/recipes/input-otp";
import { createContext } from "../../internal/utils";

interface InputOTPContextValue {
  slots: InputOtpVariants;
}

export const { InputOTPContext, useInputOTP } = createContext<InputOTPContextValue>()({
  name: "InputOTP",
});
