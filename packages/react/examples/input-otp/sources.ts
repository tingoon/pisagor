import { BlurOnCompleteSource as BlurOnComplete } from "./blur-on-complete";
import { ControlledSource as Controlled } from "./controlled";
import { CustomRecipeSource as CustomRecipe } from "./custom-recipe";
import { CustomSizeSource as CustomSize } from "./custom-size";
import { DisabledSource as Disabled } from "./disabled";
import { FourDigitsSource as FourDigits } from "./four-digits";
import { InvalidSource as Invalid } from "./invalid";
import { MaskSource as Mask } from "./mask";
import { SeparatorSource as Separator } from "./separator";
import { SizesSource as Sizes } from "./sizes";
import { VariantsSource as Variants } from "./variants";
import { WithPlaceholderSource as WithPlaceholder } from "./with-placeholder";

export const imports = `import { InputOTP } from "@pisagor/react";`;

export const sources = {
  BlurOnComplete,
  Controlled,
  CustomRecipe,
  CustomSize,
  Disabled,
  FourDigits,
  Invalid,
  Mask,
  Separator,
  Sizes,
  Variants,
  WithPlaceholder,
} as const;
