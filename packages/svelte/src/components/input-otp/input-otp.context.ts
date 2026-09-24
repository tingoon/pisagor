import type { InputOtpRecipe } from "@pisagor/recipes/input-otp";
import { createContext } from "../../utils/create-context";

export interface InputOTPContextValue {
  slots: InputOtpRecipe;
}

const ctx = createContext<InputOTPContextValue>({ name: "InputOTP" });

export const setInputOTPContext = ctx.setContext;
export const useInputOTP = ctx.getContext;
