import type { InputOtpRecipe } from "@pisagor/recipes";

import { createContext } from "../../utils";
import type { InputProps } from "../input/input";

interface InputOTPContextValue {
  size?: InputProps["size"];
  slots: InputOtpRecipe;
  variant?: InputProps["variant"];
}

export const { InputOTPContext, useInputOTP } =
  createContext("InputOTP")<InputOTPContextValue>();
