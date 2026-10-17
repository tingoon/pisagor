import { AutohighlightSource as Autohighlight } from "./autohighlight";
import { CompoundSource as Compound } from "./compound";
import { ControlledSource as Controlled } from "./controlled";
import { CustomRecipeSource as CustomRecipe } from "./custom-recipe";
import { DefaultSource as Default } from "./default";
import { DisabledSource as Disabled } from "./disabled";
import { GroupSource as Group } from "./group";
import { InvalidSource as Invalid } from "./invalid";
import { MultipleSource as Multiple } from "./multiple";
import { SizesSource as Sizes } from "./sizes";
import { VariantsSource as Variants } from "./variants";
import { WithClearButtonSource as WithClearButton } from "./with-clear-button";
import { WithScrollSource as WithScroll } from "./with-scroll";
import { WithStartIconSource as WithStartIcon } from "./with-start-icon";

export const imports = `import { Combobox } from "@pisagor/react";`;

export const sources = {
  Autohighlight,
  Compound,
  Controlled,
  CustomRecipe,
  Default,
  Disabled,
  Group,
  Invalid,
  Multiple,
  Sizes,
  Variants,
  WithClearButton,
  WithScroll,
  WithStartIcon,
} as const;
