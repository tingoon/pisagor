import InputRoot from "./input.svelte";
import InputClearAddon from "./input-clear-addon.svelte";
import InputClearButton from "./input-clear-button.svelte";

export const Input = Object.assign(InputRoot, {
  ClearAddon: InputClearAddon,
  ClearButton: InputClearButton,
});
