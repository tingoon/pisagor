import type { InputOtpRecipe } from "@pisagor/recipes";
import { createContext } from "../../utils/create-context";

export interface InputOTPContextValue {
  size?: "sm" | "md" | "lg";
  slots: InputOtpRecipe;
  variant?: "primary" | "secondary";
}

const ctx = createContext("InputOTP")<InputOTPContextValue>();

export const setInputOTPContext = ctx.setContext;
export const useInputOTP = ctx.getContext;
