import { CheckboxGroupSource as CheckboxGroup } from "./checkbox-group";
import { CompoundSource as Compound } from "./compound";
import { ControlledSource as Controlled } from "./controlled";
import { CustomRecipeSource as CustomRecipe } from "./custom-recipe";
import { DefaultSource as Default } from "./default";
import { DisabledSource as Disabled } from "./disabled";
import { IndeterminateSource as Indeterminate } from "./indeterminate";
import { InvalidSource as Invalid } from "./invalid";
import { SizesSource as Sizes } from "./sizes";
import { VariantsSource as Variants } from "./variants";

export const imports = `import { Checkbox } from "@pisagor/solid";`;

export const sources = {
  CheckboxGroup,
  Compound,
  Controlled,
  CustomRecipe,
  Default,
  Disabled,
  Indeterminate,
  Invalid,
  Sizes,
  Variants,
} as const;
