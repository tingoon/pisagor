import ButtonGroupRoot from "./button-group-root.svelte";
import ButtonGroupSeparator from "./button-group-separator.svelte";
import ButtonGroupText from "./button-group-text.svelte";

export const ButtonGroup = Object.assign(ButtonGroupRoot, {
  Separator: ButtonGroupSeparator,
  Text: ButtonGroupText,
});
