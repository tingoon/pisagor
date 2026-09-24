import CheckboxRoot from "./checkbox.svelte";
import CheckboxGroup from "./checkbox-group.svelte";

export const Checkbox = Object.assign(CheckboxRoot, {
  Group: CheckboxGroup,
});
