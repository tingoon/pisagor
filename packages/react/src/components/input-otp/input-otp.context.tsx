import type { InputOtpRecipe } from "@pisagor/recipes/input-otp";
import { createContext } from "../../internal/utils";

interface InputOTPContextValue {
  slots: InputOtpRecipe;
}

export const { InputOTPContext, useInputOTP } = createContext<InputOTPContextValue>()({
  name: "InputOTP",
});
