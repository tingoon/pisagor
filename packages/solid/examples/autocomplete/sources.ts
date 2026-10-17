import { CompoundSource as Compound } from "./compound";
import { ControlledSource as Controlled } from "./controlled";
import { CustomRecipeSource as CustomRecipe } from "./custom-recipe";
import { DefaultSource as Default } from "./default";
import { DisabledSource as Disabled } from "./disabled";
import { GroupSource as Group } from "./group";
import { InvalidSource as Invalid } from "./invalid";
import { SizesSource as Sizes } from "./sizes";
import { VariantsSource as Variants } from "./variants";
import { WithClearButtonSource as WithClearButton } from "./with-clear-button";
import { WithStartIconSource as WithStartIcon } from "./with-start-icon";
import { WithTriggerSource as WithTrigger } from "./with-trigger";

export const imports = `import { Autocomplete } from "@pisagor/solid";`;

export const sources = {
  Compound,
  Controlled,
  CustomRecipe,
  Default,
  Disabled,
  Group,
  Invalid,
  Sizes,
  Variants,
  WithClearButton,
  WithStartIcon,
  WithTrigger,
} as const;
