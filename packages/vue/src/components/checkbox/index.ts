import { CheckboxGroup, CheckboxRoot } from "./checkbox";

export { type CheckboxProps, checkboxVariants } from "./checkbox";

export const Checkbox = Object.assign(CheckboxRoot, {
  Group: CheckboxGroup,
});
