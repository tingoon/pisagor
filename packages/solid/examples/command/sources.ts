import { CustomRecipeSource as CustomRecipe } from "./custom-recipe";
import { DefaultSource as Default } from "./default";
import { GroupsSource as Groups } from "./groups";
import { ScrollableSource as Scrollable } from "./scrollable";
import { ShortcutsSource as Shortcuts } from "./shortcuts";
import { ShorthandSource as Shorthand } from "./shorthand";
import { WithDialogSource as WithDialog } from "./with-dialog";
import { WithFooterSource as WithFooter } from "./with-footer";

export const imports = `import { Command } from "@pisagor/solid";`;

export const sources = {
  CustomRecipe,
  Default,
  Groups,
  Scrollable,
  Shortcuts,
  Shorthand,
  WithDialog,
  WithFooter,
} as const;
