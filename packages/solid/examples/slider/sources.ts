import { CompoundSource as Compound } from "./compound";
import { ControlledSource as Controlled } from "./controlled";
import { CustomRecipeSource as CustomRecipe } from "./custom-recipe";
import { DisabledSource as Disabled } from "./disabled";
import { InvalidSource as Invalid } from "./invalid";
import { MarksSource as Marks } from "./marks";
import { MinMaxSource as MinMax } from "./min-max";
import { RangeSource as Range } from "./range";
import { StepSource as Step } from "./step";
import { VariantsSource as Variants } from "./variants";
import { VerticalSource as Vertical } from "./vertical";
import { WithLabelSource as WithLabel } from "./with-label";

export const imports = `import { Slider } from "@pisagor/solid";`;

export const sources = {
  Compound,
  Controlled,
  CustomRecipe,
  Disabled,
  Invalid,
  Marks,
  MinMax,
  Range,
  Step,
  Variants,
  Vertical,
  WithLabel,
} as const;
