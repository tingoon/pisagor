import { createContext } from "../../internal/utils/create-context";
import type { InputProps } from "../input";

type FormControlVariant = "primary" | "secondary";

export interface InputOTPContextValue {
  size?: InputProps["size"];
  variant?: FormControlVariant;
}

export const [provideInputOTPContext, , useInputOTPContextRef] =
  createContext("InputOTP")<InputOTPContextValue>();
