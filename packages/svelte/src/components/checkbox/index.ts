import CheckboxRoot from "./checkbox.svelte";
import CheckboxGroup from "./checkbox-group.svelte";

export type { CheckboxCheckedState } from "@ark-ui/svelte/checkbox";

export const Checkbox = Object.assign(CheckboxRoot, {
  Group: CheckboxGroup,
});
