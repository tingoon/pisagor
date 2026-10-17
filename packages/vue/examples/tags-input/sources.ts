import BlurBehavior from "./blur-behavior.vue?raw";
import Controlled from "./controlled.vue?raw";
import ControlledInputValue from "./controlled-input-value.vue?raw";
import CustomDelimiter from "./custom-delimiter.vue?raw";
import Disabled from "./disabled.vue?raw";
import DisableEditing from "./disable-editing.vue?raw";
import Invalid from "./invalid.vue?raw";
import MaxLength from "./max-length.vue?raw";
import MaxTags from "./max-tags.vue?raw";
import MaxWithOverflow from "./max-with-overflow.vue?raw";
import PasteBehavior from "./paste-behavior.vue?raw";
import SanitizeValue from "./sanitize-value.vue?raw";
import Sizes from "./sizes.vue?raw";
import Validation from "./validation.vue?raw";
import Variants from "./variants.vue?raw";
import WithCombobox from "./with-combobox.vue?raw";

export const imports = `import { TagsInput } from "@pisagor/vue";`;

export const sources = {
  BlurBehavior,
  Controlled,
  ControlledInputValue,
  CustomDelimiter,
  Disabled,
  DisableEditing,
  Invalid,
  MaxLength,
  MaxTags,
  MaxWithOverflow,
  PasteBehavior,
  SanitizeValue,
  Sizes,
  Validation,
  Variants,
  WithCombobox,
} as const;
