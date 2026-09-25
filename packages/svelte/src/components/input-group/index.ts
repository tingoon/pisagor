import InputGroupAddon from "./input-group-addon.svelte";
import InputGroupButton from "./input-group-button.svelte";
import InputGroupInput from "./input-group-input.svelte";
import InputGroupRoot from "./input-group-root.svelte";
import InputGroupText from "./input-group-text.svelte";
import InputGroupTextarea from "./input-group-textarea.svelte";

export const InputGroup = Object.assign(InputGroupRoot, {
  Addon: InputGroupAddon,
  Button: InputGroupButton,
  Input: InputGroupInput,
  Text: InputGroupText,
  Textarea: InputGroupTextarea,
});
