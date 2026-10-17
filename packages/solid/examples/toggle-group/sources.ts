import { CompoundSource as Compound } from "./compound";
import { ControlledSource as Controlled } from "./controlled";
import { CustomRecipeSource as CustomRecipe } from "./custom-recipe";
import { DisabledSource as Disabled } from "./disabled";
import { DisabledItemSource as DisabledItem } from "./disabled-item";
import { FontWeightSource as FontWeight } from "./font-weight";
import { HorizontalSource as Horizontal } from "./horizontal";
import { SingleSource as Single } from "./single";
import { SizesSource as Sizes } from "./sizes";
import { SpacingSource as Spacing } from "./spacing";
import { VariantsSource as Variants } from "./variants";
import { VerticalSource as Vertical } from "./vertical";

export const imports = `import { ToggleGroup } from "@pisagor/solid";`;

export const sources = {
  Compound,
  Controlled,
  CustomRecipe,
  Disabled,
  DisabledItem,
  FontWeight,
  Horizontal,
  Single,
  Sizes,
  Spacing,
  Variants,
  Vertical,
} as const;
