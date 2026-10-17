import { CloseTriggerSource as CloseTrigger } from "./close-trigger";
import { ControlledSource as Controlled } from "./controlled";
import { CustomRecipeSource as CustomRecipe } from "./custom-recipe";
import { CustomSpacingSource as CustomSpacing } from "./custom-spacing";
import { DefaultSource as Default } from "./default";
import { GutterSource as Gutter } from "./gutter";
import { PlacementsSource as Placements } from "./placements";
import { WithDialogSource as WithDialog } from "./with-dialog";
import { WithMenuSource as WithMenu } from "./with-menu";

export const imports = `import { ActionBar } from "@pisagor/solid";`;

export const sources = {
  CloseTrigger,
  Controlled,
  CustomRecipe,
  CustomSpacing,
  Default,
  Gutter,
  Placements,
  WithDialog,
  WithMenu,
} as const;
