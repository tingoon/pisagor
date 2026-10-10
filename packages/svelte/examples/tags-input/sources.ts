import blur_behaviorRaw from "./blur-behavior.svelte?raw";
import controlledRaw from "./controlled.svelte?raw";
import controlled_input_valueRaw from "./controlled-input-value.svelte?raw";
import custom_delimiterRaw from "./custom-delimiter.svelte?raw";
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
  BlurBehavior: blur_behaviorRaw,
  Controlled: controlledRaw,
  ControlledInputValue: controlled_input_valueRaw,
  CustomDelimiter: custom_delimiterRaw,
  Disabled: disabledRaw,
  DisableEditing: disable_editingRaw,
  Invalid: invalidRaw,
  MaxLength: max_lengthRaw,
  MaxTags: max_tagsRaw,
  MaxWithOverflow: max_with_overflowRaw,
  PasteBehavior: paste_behaviorRaw,
  SanitizeValue: sanitize_valueRaw,
  Sizes: sizesRaw,
  Validation: validationRaw,
  Variants: variantsRaw,
  WithCombobox: with_comboboxRaw,
} as const;
