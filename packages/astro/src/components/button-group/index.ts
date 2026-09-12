import ButtonGroupRoot from "./button-group.astro";
import ButtonGroupSeparator from "./button-group-separator.astro";
import ButtonGroupText from "./button-group-text.astro";

export const ButtonGroup = Object.assign(ButtonGroupRoot, {
  Separator: ButtonGroupSeparator,
  Text: ButtonGroupText,
});
