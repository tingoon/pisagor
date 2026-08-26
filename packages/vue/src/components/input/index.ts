import { Input as InputRoot } from "./input";
import { InputClearAddon, InputClearButton } from "./input-clear-button";

export type { InputProps } from "./input";

export const Input = Object.assign(InputRoot, {
  ClearAddon: InputClearAddon,
  ClearButton: InputClearButton,
});
