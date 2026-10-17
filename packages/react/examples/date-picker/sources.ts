import { ClearableSource as Clearable } from "./clearable";
import { CustomFormatSource as CustomFormat } from "./custom-format";
import { CustomRecipeSource as CustomRecipe } from "./custom-recipe";
import { DefaultSource as Default } from "./default";
import { DisabledSource as Disabled } from "./disabled";
import { InputSource as Input } from "./input";
import { InvalidSource as Invalid } from "./invalid";
import { RangeSource as Range } from "./range";
import { TimeSource as Time } from "./time";
import { VariantsSource as Variants } from "./variants";
import { WithPresetsSource as WithPresets } from "./with-presets";

export const imports = `import { DatePicker } from "@pisagor/react";`;

export const sources = {
  Clearable,
  CustomFormat,
  CustomRecipe,
  Default,
  Disabled,
  Input,
  Invalid,
  Range,
  Time,
  Variants,
  WithPresets,
} as const;
