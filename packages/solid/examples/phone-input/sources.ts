import { ControlledSource as Controlled } from "./controlled";
import { CustomPopupSource as CustomPopup } from "./custom-popup";
import { CustomRecipeSource as CustomRecipe } from "./custom-recipe";
import { DisabledSource as Disabled } from "./disabled";
import { InvalidSource as Invalid } from "./invalid";
import { SizesSource as Sizes } from "./sizes";
import { VariantsSource as Variants } from "./variants";

export const imports = `import { PhoneInput } from "@pisagor/solid/phone-input";`;

export const sources = {
  Controlled,
  CustomPopup,
  CustomRecipe,
  Disabled,
  Invalid,
  Sizes,
  Variants,
} as const;
