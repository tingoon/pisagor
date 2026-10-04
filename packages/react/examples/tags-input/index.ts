import blur_behaviorRaw from "./blur-behavior.tsx?raw";
import controlledRaw from "./controlled.tsx?raw";
import controlled_input_valueRaw from "./controlled-input-value.tsx?raw";
import custom_delimiterRaw from "./custom-delimiter.tsx?raw";
import defaultRaw from "./default.tsx?raw";
import disable_editingRaw from "./disable-editing.tsx?raw";
import disabledRaw from "./disabled.tsx?raw";
import invalidRaw from "./invalid.tsx?raw";
import max_lengthRaw from "./max-length.tsx?raw";
import max_tagsRaw from "./max-tags.tsx?raw";
import max_with_overflowRaw from "./max-with-overflow.tsx?raw";
import paste_behaviorRaw from "./paste-behavior.tsx?raw";
import sanitize_valueRaw from "./sanitize-value.tsx?raw";
import sizesRaw from "./sizes.tsx?raw";
import validationRaw from "./validation.tsx?raw";
import variantsRaw from "./variants.tsx?raw";
import with_comboboxRaw from "./with-combobox.tsx?raw";

export const imports = `import { TagsInput } from "@pisagor/react";`;

export const sources = {
  BlurBehavior: blur_behaviorRaw,
  Controlled: controlledRaw,
  ControlledInputValue: controlled_input_valueRaw,
  CustomDelimiter: custom_delimiterRaw,
  Default: defaultRaw,
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

export * from "./blur-behavior";
export * from "./controlled";
export * from "./controlled-input-value";
export * from "./custom-delimiter";
export * from "./default";
export * from "./disable-editing";
export * from "./disabled";
export * from "./invalid";
export * from "./max-length";
export * from "./max-tags";
export * from "./max-with-overflow";
export * from "./paste-behavior";
export * from "./sanitize-value";
export * from "./sizes";
export * from "./validation";
export * from "./variants";
export * from "./with-combobox";
