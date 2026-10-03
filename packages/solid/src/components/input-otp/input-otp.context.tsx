import type { InputOtpRecipe } from "@pisagor/recipes/input-otp";
import { createContext } from "../../utils";
import type { InputProps } from "../input/input";

interface InputOTPContextValue {
  size?: InputProps["size"];
  slots: InputOtpRecipe;
  variant?: InputProps["variant"];
}

export const { InputOTPContext, useInputOTP } =
  createContext<InputOTPContextValue>()({
    name: "InputOTP",
  });
