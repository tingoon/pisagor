import { CompoundSource as Compound } from "./compound";
import { ControlledSource as Controlled } from "./controlled";
import { CustomRecipeSource as CustomRecipe } from "./custom-recipe";
import { DefaultSource as Default } from "./default";
import { DisabledSource as Disabled } from "./disabled";
import { EmptySource as Empty } from "./empty";
import { GroupingSource as Grouping } from "./grouping";
import { InvalidSource as Invalid } from "./invalid";
import { MaxSelectionSource as MaxSelection } from "./max-selection";
import { MultipleSource as Multiple } from "./multiple";
import { SizesSource as Sizes } from "./sizes";
import { VariantsSource as Variants } from "./variants";
import { WithScrollSource as WithScroll } from "./with-scroll";

export const imports = `import { Select } from "@pisagor/react";`;

export const sources = {
  Compound,
  Controlled,
  CustomRecipe,
  Default,
  Disabled,
  Empty,
  Grouping,
  Invalid,
  MaxSelection,
  Multiple,
  Sizes,
  Variants,
  WithScroll,
} as const;
