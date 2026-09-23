import { stripVueExample } from "@pisagor/utils";
import blur_behaviorRaw from "./blur-behavior.vue?raw";
import controlledRaw from "./controlled.vue?raw";
import controlled_input_valueRaw from "./controlled-input-value.vue?raw";
import custom_delimiterRaw from "./custom-delimiter.vue?raw";
import defaultRaw from "./default.vue?raw";
import disable_editingRaw from "./disable-editing.vue?raw";
import disabledRaw from "./disabled.vue?raw";
import invalidRaw from "./invalid.vue?raw";
import max_lengthRaw from "./max-length.vue?raw";
import max_tagsRaw from "./max-tags.vue?raw";
import max_with_overflowRaw from "./max-with-overflow.vue?raw";
import on_surfaceRaw from "./on-surface.vue?raw";
import paste_behaviorRaw from "./paste-behavior.vue?raw";
import sanitize_valueRaw from "./sanitize-value.vue?raw";
import sizesRaw from "./sizes.vue?raw";
import validationRaw from "./validation.vue?raw";
import variantsRaw from "./variants.vue?raw";
import with_comboboxRaw from "./with-combobox.vue?raw";

export const imports = `import { TagsInput } from "@pisagor/vue/tags-input";`;

export const sources = {
  BlurBehavior: stripVueExample(blur_behaviorRaw),
  Controlled: stripVueExample(controlledRaw),
  ControlledInputValue: stripVueExample(controlled_input_valueRaw),
  CustomDelimiter: stripVueExample(custom_delimiterRaw),
  Default: stripVueExample(defaultRaw),
  Disabled: stripVueExample(disabledRaw),
  DisableEditing: stripVueExample(disable_editingRaw),
  Invalid: stripVueExample(invalidRaw),
  MaxLength: stripVueExample(max_lengthRaw),
  MaxTags: stripVueExample(max_tagsRaw),
  MaxWithOverflow: stripVueExample(max_with_overflowRaw),
  OnSurface: stripVueExample(on_surfaceRaw),
  PasteBehavior: stripVueExample(paste_behaviorRaw),
  SanitizeValue: stripVueExample(sanitize_valueRaw),
  Sizes: stripVueExample(sizesRaw),
  Validation: stripVueExample(validationRaw),
  Variants: stripVueExample(variantsRaw),
  WithCombobox: stripVueExample(with_comboboxRaw),
} as const;

export { default as BlurBehavior } from "./blur-behavior.vue";
export { default as Controlled } from "./controlled.vue";
export { default as ControlledInputValue } from "./controlled-input-value.vue";
export { default as CustomDelimiter } from "./custom-delimiter.vue";
export { default as Default } from "./default.vue";
export { default as DisableEditing } from "./disable-editing.vue";
export { default as Disabled } from "./disabled.vue";
export { default as Invalid } from "./invalid.vue";
export { default as MaxLength } from "./max-length.vue";
export { default as MaxTags } from "./max-tags.vue";
export { default as MaxWithOverflow } from "./max-with-overflow.vue";
export { default as OnSurface } from "./on-surface.vue";
export { default as PasteBehavior } from "./paste-behavior.vue";
export { default as SanitizeValue } from "./sanitize-value.vue";
export { default as Sizes } from "./sizes.vue";
export { default as Validation } from "./validation.vue";
export { default as Variants } from "./variants.vue";
export { default as WithCombobox } from "./with-combobox.vue";
