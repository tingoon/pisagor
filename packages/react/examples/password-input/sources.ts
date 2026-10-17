import { AutocompleteSource as Autocomplete } from "./autocomplete";
import { AutoHideSource as AutoHide } from "./auto-hide";
import { CompoundSource as Compound } from "./compound";
import { ControlledSource as Controlled } from "./controlled";
import { ControlledVisibilitySource as ControlledVisibility } from "./controlled-visibility";
import { DefaultSource as Default } from "./default";
import { DisabledSource as Disabled } from "./disabled";
import { InvalidSource as Invalid } from "./invalid";
import { SizesSource as Sizes } from "./sizes";

export const imports = `import { PasswordInput } from "@pisagor/react";`;

export const sources = {
  Autocomplete,
  AutoHide,
  Compound,
  Controlled,
  ControlledVisibility,
  Default,
  Disabled,
  Invalid,
  Sizes,
} as const;
