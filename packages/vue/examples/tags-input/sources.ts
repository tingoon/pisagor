import blur_behaviorRaw from "./blur-behavior.vue?raw";
import controlledRaw from "./controlled.vue?raw";
import controlled_input_valueRaw from "./controlled-input-value.vue?raw";
import custom_delimiterRaw from "./custom-delimiter.vue?raw";
import disable_editingRaw from "./disable-editing.vue?raw";
import disabledRaw from "./disabled.vue?raw";
import invalidRaw from "./invalid.vue?raw";
import max_lengthRaw from "./max-length.vue?raw";
import max_tagsRaw from "./max-tags.vue?raw";
import max_with_overflowRaw from "./max-with-overflow.vue?raw";
import paste_behaviorRaw from "./paste-behavior.vue?raw";
import sanitize_valueRaw from "./sanitize-value.vue?raw";
import sizesRaw from "./sizes.vue?raw";
import validationRaw from "./validation.vue?raw";
import variantsRaw from "./variants.vue?raw";
import with_comboboxRaw from "./with-combobox.vue?raw";

export const imports = `import { TagsInput } from "@pisagor/vue";`;

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
