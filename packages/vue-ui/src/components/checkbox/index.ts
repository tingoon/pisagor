import { CheckboxGroup, CheckboxRoot } from "./checkbox";

export type { CheckboxProps } from "./checkbox";

export const Checkbox = Object.assign(CheckboxRoot, {
  Group: CheckboxGroup,
});
