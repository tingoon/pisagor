import { InputOTP } from "@pisagor/solid";
import { inputOtpRecipe } from "@pisagor/recipes";
import { tv } from "tailwind-variants";

const brandInputOtpRecipe = tv({
  extend: inputOtpRecipe,
  slots: {
    input: "caret-emerald-600",
    separator: "bg-emerald-500",
  },
  variants: {},
});

export function CustomRecipe() {
  return <InputOTP recipe={brandInputOtpRecipe} groupSize={3} />;
}
