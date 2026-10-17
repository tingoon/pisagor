import { CompoundSource as Compound } from "./compound";
import { ControlledSource as Controlled } from "./controlled";
import { CustomRecipeSource as CustomRecipe } from "./custom-recipe";
import { DisabledSource as Disabled } from "./disabled";
import { FieldOnlySource as FieldOnly } from "./field-only";
import { FormattedSource as Formatted } from "./formatted";
import { InvalidSource as Invalid } from "./invalid";
import { MouseWheelSource as MouseWheel } from "./mouse-wheel";
import { RangeSource as Range } from "./range";
import { ScrubSource as Scrub } from "./scrub";
import { SizesSource as Sizes } from "./sizes";
import { StepSource as Step } from "./step";
import { VariantsSource as Variants } from "./variants";

export const imports = `import { NumberInput } from "@pisagor/solid";`;

export const sources = {
  Compound,
  Controlled,
  CustomRecipe,
  Disabled,
  FieldOnly,
  Formatted,
  Invalid,
  MouseWheel,
  Range,
  Scrub,
  Sizes,
  Step,
  Variants,
} as const;
