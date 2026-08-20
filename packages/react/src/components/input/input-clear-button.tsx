import { XIcon } from "@phosphor-icons/react";
import {
  InputGroupAddon,
  InputGroupButton,
  type InputGroupButtonProps,
} from "../input-group/input-group-core";

// #region Types
interface InputClearButtonProps extends InputGroupButtonProps {
  onClear: () => void;
}
// #endregion

// #region Parts
export function InputClearButton({ onClear, ...rest }: InputClearButtonProps) {
  return (
    <InputGroupButton
      {...rest}
      aria-label="Clear"
      data-part="clear-button"
      data-scope="input"
      onClick={onClear}
      size="icon-xs"
      type="button"
      variant="ghost"
    >
      <XIcon />
    </InputGroupButton>
  );
}
InputClearButton.displayName = "Input.ClearButton";

export function InputClearAddon({ onClear, ...rest }: InputClearButtonProps) {
  return (
    <InputGroupAddon align="inline-end">
      <InputClearButton {...rest} onClear={onClear} />
    </InputGroupAddon>
  );
}
InputClearAddon.displayName = "Input.ClearAddon";
// #endregion
