import BlurBehavior from "./blur-behavior.svelte?raw";
import Controlled from "./controlled.svelte?raw";
import ControlledInputValue from "./controlled-input-value.svelte?raw";
import CustomDelimiter from "./custom-delimiter.svelte?raw";
import Disabled from "./disabled.svelte?raw";
import DisableEditing from "./disable-editing.svelte?raw";
import Invalid from "./invalid.svelte?raw";
import MaxLength from "./max-length.svelte?raw";
import MaxTags from "./max-tags.svelte?raw";
import MaxWithOverflow from "./max-with-overflow.svelte?raw";
import PasteBehavior from "./paste-behavior.svelte?raw";
import SanitizeValue from "./sanitize-value.svelte?raw";
import Sizes from "./sizes.svelte?raw";
import Validation from "./validation.svelte?raw";
import Variants from "./variants.svelte?raw";
import WithCombobox from "./with-combobox.svelte?raw";

export const imports = `import { TagsInput } from "@pisagor/svelte";`;

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
