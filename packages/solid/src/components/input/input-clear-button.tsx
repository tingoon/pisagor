import type { JSX } from "solid-js";
import { splitProps } from "solid-js";
import {
  InputGroupAddon,
  InputGroupButton,
  type InputGroupButtonProps,
} from "../input-group/input-group-core";

interface InputClearButtonProps extends InputGroupButtonProps {
  onClear: () => void;
}

function XIcon() {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      height="1em"
      viewBox="0 0 256 256"
      width="1em"
    >
      <path
        d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function InputClearButton(props: InputClearButtonProps): JSX.Element {
  const [local, rest] = splitProps(props, ["onClear"]);

  return (
    <InputGroupButton
      {...rest}
      aria-label="Clear"
      data-part="clear-button"
      data-scope="input"
      onClick={local.onClear}
      size="icon-xs"
      type="button"
      variant="ghost"
    >
      <XIcon />
    </InputGroupButton>
  );
}

export function InputClearAddon(props: InputClearButtonProps): JSX.Element {
  const [local, rest] = splitProps(props, ["onClear"]);

  return (
    <InputGroupAddon align="inline-end">
      <InputClearButton {...rest} onClear={local.onClear} />
    </InputGroupAddon>
  );
}
