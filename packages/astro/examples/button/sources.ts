import CustomColor from "./custom-color.astro?raw";
import CustomRecipe from "./custom-recipe.astro?raw";
import Disabled from "./disabled.astro?raw";
import Icon from "./icon.astro?raw";
import Loading from "./loading.astro?raw";
import NoClickEffect from "./no-click-effect.astro?raw";
import Pill from "./pill.astro?raw";
import Sizes from "./sizes.astro?raw";
import Variants from "./variants.astro?raw";
import WithIcon from "./with-icon.astro?raw";

export const imports = `---
import { Button } from "@pisagor/astro";
---`;

export const sources = {
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
