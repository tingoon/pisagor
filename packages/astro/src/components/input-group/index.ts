import InputGroupRoot from "./input-group.astro";
import InputGroupAddon from "./input-group-addon.astro";
import InputGroupButton from "./input-group-button.astro";
import InputGroupText from "./input-group-text.astro";

export const InputGroup = Object.assign(InputGroupRoot, {
  Addon: InputGroupAddon,
  Button: InputGroupButton,
  Text: InputGroupText,
});
