import { BlurBehaviorSource as BlurBehavior } from "./blur-behavior";
import { ControlledSource as Controlled } from "./controlled";
import { ControlledInputValueSource as ControlledInputValue } from "./controlled-input-value";
import { CustomDelimiterSource as CustomDelimiter } from "./custom-delimiter";
import { DisabledSource as Disabled } from "./disabled";
import { DisableEditingSource as DisableEditing } from "./disable-editing";
import { InvalidSource as Invalid } from "./invalid";
import { MaxLengthSource as MaxLength } from "./max-length";
import { MaxTagsSource as MaxTags } from "./max-tags";
import { MaxWithOverflowSource as MaxWithOverflow } from "./max-with-overflow";
import { PasteBehaviorSource as PasteBehavior } from "./paste-behavior";
import { SanitizeValueSource as SanitizeValue } from "./sanitize-value";
import { SizesSource as Sizes } from "./sizes";
import { ValidationSource as Validation } from "./validation";
import { VariantsSource as Variants } from "./variants";
import { WithComboboxSource as WithCombobox } from "./with-combobox";

export const imports = `import { TagsInput } from "@pisagor/react";`;

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
