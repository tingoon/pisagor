import { stripTsxExample } from "@pisagor/utils";
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

export const imports = `import { TagsInput } from "@pisagor/react/tags-input";`;

export const sources = {
  BlurBehavior: stripTsxExample(blur_behaviorRaw),
  Controlled: stripTsxExample(controlledRaw),
  ControlledInputValue: stripTsxExample(controlled_input_valueRaw),
  CustomDelimiter: stripTsxExample(custom_delimiterRaw),
  Default: stripTsxExample(defaultRaw),
  Disabled: stripTsxExample(disabledRaw),
  DisableEditing: stripTsxExample(disable_editingRaw),
  Invalid: stripTsxExample(invalidRaw),
  MaxLength: stripTsxExample(max_lengthRaw),
  MaxTags: stripTsxExample(max_tagsRaw),
  MaxWithOverflow: stripTsxExample(max_with_overflowRaw),
  PasteBehavior: stripTsxExample(paste_behaviorRaw),
  SanitizeValue: stripTsxExample(sanitize_valueRaw),
  Sizes: stripTsxExample(sizesRaw),
  Validation: stripTsxExample(validationRaw),
  Variants: stripTsxExample(variantsRaw),
  WithCombobox: stripTsxExample(with_comboboxRaw),
} as const;

export { BlurBehavior } from "./blur-behavior";
export { Controlled } from "./controlled";
export { ControlledInputValue } from "./controlled-input-value";
export { CustomDelimiter } from "./custom-delimiter";
export { Default } from "./default";
export { DisableEditing } from "./disable-editing";
export { Disabled } from "./disabled";
export { Invalid } from "./invalid";
export { MaxLength } from "./max-length";
export { MaxTags } from "./max-tags";
export { MaxWithOverflow } from "./max-with-overflow";
export { PasteBehavior } from "./paste-behavior";
export { SanitizeValue } from "./sanitize-value";
export { Sizes } from "./sizes";
export { Validation } from "./validation";
export { Variants } from "./variants";
export { WithCombobox } from "./with-combobox";
