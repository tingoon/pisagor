import { stripSvelteExample } from "@pisagor/utils";
import blur_behaviorRaw from "./blur-behavior.svelte?raw";
import controlledRaw from "./controlled.svelte?raw";
import controlled_input_valueRaw from "./controlled-input-value.svelte?raw";
import custom_delimiterRaw from "./custom-delimiter.svelte?raw";
import defaultRaw from "./default.svelte?raw";
import disable_editingRaw from "./disable-editing.svelte?raw";
import disabledRaw from "./disabled.svelte?raw";
import invalidRaw from "./invalid.svelte?raw";
import max_lengthRaw from "./max-length.svelte?raw";
import max_tagsRaw from "./max-tags.svelte?raw";
import max_with_overflowRaw from "./max-with-overflow.svelte?raw";
import paste_behaviorRaw from "./paste-behavior.svelte?raw";
import sanitize_valueRaw from "./sanitize-value.svelte?raw";
import sizesRaw from "./sizes.svelte?raw";
import validationRaw from "./validation.svelte?raw";
import variantsRaw from "./variants.svelte?raw";
import with_comboboxRaw from "./with-combobox.svelte?raw";

export const imports = `import { TagsInput } from "@pisagor/svelte";`;

export const sources = {
  BlurBehavior: stripSvelteExample(blur_behaviorRaw),
  Controlled: stripSvelteExample(controlledRaw),
  ControlledInputValue: stripSvelteExample(controlled_input_valueRaw),
  CustomDelimiter: stripSvelteExample(custom_delimiterRaw),
  Default: stripSvelteExample(defaultRaw),
  Disabled: stripSvelteExample(disabledRaw),
  DisableEditing: stripSvelteExample(disable_editingRaw),
  Invalid: stripSvelteExample(invalidRaw),
  MaxLength: stripSvelteExample(max_lengthRaw),
  MaxTags: stripSvelteExample(max_tagsRaw),
  MaxWithOverflow: stripSvelteExample(max_with_overflowRaw),
  PasteBehavior: stripSvelteExample(paste_behaviorRaw),
  SanitizeValue: stripSvelteExample(sanitize_valueRaw),
  Sizes: stripSvelteExample(sizesRaw),
  Validation: stripSvelteExample(validationRaw),
  Variants: stripSvelteExample(variantsRaw),
  WithCombobox: stripSvelteExample(with_comboboxRaw),
} as const;

export { default as BlurBehavior } from "./blur-behavior.svelte";
export { default as Controlled } from "./controlled.svelte";
export { default as ControlledInputValue } from "./controlled-input-value.svelte";
export { default as CustomDelimiter } from "./custom-delimiter.svelte";
export { default as Default } from "./default.svelte";
export { default as DisableEditing } from "./disable-editing.svelte";
export { default as Disabled } from "./disabled.svelte";
export { default as Invalid } from "./invalid.svelte";
export { default as MaxLength } from "./max-length.svelte";
export { default as MaxTags } from "./max-tags.svelte";
export { default as MaxWithOverflow } from "./max-with-overflow.svelte";
export { default as PasteBehavior } from "./paste-behavior.svelte";
export { default as SanitizeValue } from "./sanitize-value.svelte";
export { default as Sizes } from "./sizes.svelte";
export { default as Validation } from "./validation.svelte";
export { default as Variants } from "./variants.svelte";
export { default as WithCombobox } from "./with-combobox.svelte";
