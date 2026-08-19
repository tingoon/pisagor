import { Input as InputRoot } from "./input";
import { InputClearAddon, InputClearButton } from "./input-clear-button";

export { inputRootVariants, inputVariants } from "@pisagor/styles/ui/input";
export type { InputProps } from "./input";

export const Input = Object.assign(InputRoot, {
  ClearAddon: InputClearAddon,
  ClearButton: InputClearButton,
});
