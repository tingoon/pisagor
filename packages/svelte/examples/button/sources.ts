import AsChild from "./as-child.svelte?raw";
import CustomColor from "./custom-color.svelte?raw";
import CustomRecipe from "./custom-recipe.svelte?raw";
import Disabled from "./disabled.svelte?raw";
import Icon from "./icon.svelte?raw";
import Loading from "./loading.svelte?raw";
import NoClickEffect from "./no-click-effect.svelte?raw";
import Pill from "./pill.svelte?raw";
import Sizes from "./sizes.svelte?raw";
import Variants from "./variants.svelte?raw";
import WithIcon from "./with-icon.svelte?raw";

export const imports = `import { Button } from "@pisagor/svelte";`;

export const sources = {
  AsChild,
  CustomColor,
  CustomRecipe,
  Disabled,
  Icon,
  Loading,
  NoClickEffect,
  Pill,
  Sizes,
  Variants,
  WithIcon,
} as const;
