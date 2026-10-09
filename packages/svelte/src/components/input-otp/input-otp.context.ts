import type { InputOtpRecipe } from "@pisagor/recipes";
import { inputOtpRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../../internal/create-slot-recipe-context.svelte";
import { createContext } from "../../utils/create-context";

export const {
  Context,
  useStyles: useInputOTPStyles,
  withContext,
  withProvider,
} = createSlotRecipeContext({
  name: "InputOTP",
  recipe: inputOtpRecipe,
});

export interface InputOTPOptionsValue {
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary";
}

const optionsCtx = createContext("InputOTPOptions")<InputOTPOptionsValue>();
export const setInputOTPOptionsContext = optionsCtx.setContext;
export const useInputOTPOptions = optionsCtx.getContext;

export function useInputOTP() {
  const styles = useInputOTPStyles();
  const options = useInputOTPOptions();
  return {
    get size() {
      return options.size;
    },
    get slots() {
      return styles.slots;
    },
    get variant() {
      return options.variant;
    },
    get variants() {
      return styles.variants;
    },
  };
}

export function setInputOTPContext(
  value: InputOTPOptionsValue & {
    slots: InputOtpRecipe;
  },
) {
  Context.set({
    get slots() {
      return value.slots;
    },
  });
  setInputOTPOptionsContext({
    get size() {
      return value.size;
    },
    get variant() {
      return value.variant;
    },
  });
}
