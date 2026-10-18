import { XIcon } from "@phosphor-icons/react";
import {
  InputGroupAddon,
  InputGroupButton,
  type InputGroupButtonProps,
} from "../input-group/input-group-core";
import { useLocale } from "../provider/context";

// #region Types
interface InputClearButtonProps extends InputGroupButtonProps {
  onClear: () => void;
}
// #endregion

// #region Parts
export function InputClearButton({ onClear, ...rest }: InputClearButtonProps) {
  const { m } = useLocale();
  return (
    <InputGroupButton
      aria-label={m("inputClearButton.clear")}
      {...rest}
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

export function InputClearAddon({ onClear, ...rest }: InputClearButtonProps) {
  return (
    <InputGroupAddon align="inline-end">
      <InputClearButton {...rest} onClear={onClear} />
    </InputGroupAddon>
  );
}
// #endregion

// #region Display Names
InputClearButton.displayName = "Input.ClearButton";
InputClearAddon.displayName = "Input.ClearAddon";
// #endregion
