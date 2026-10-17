import Compound from "./compound.svelte?raw";
import Controlled from "./controlled.svelte?raw";
import Count from "./count.svelte?raw";
import CustomColor from "./custom-color.svelte?raw";
import CustomIcon from "./custom-icon.svelte?raw";
import CustomRecipe from "./custom-recipe.svelte?raw";
import CustomSize from "./custom-size.svelte?raw";
import Default from "./default.svelte?raw";
import Disabled from "./disabled.svelte?raw";
import HalfStar from "./half-star.svelte?raw";
import Invalid from "./invalid.svelte?raw";
import Readonly from "./readonly.svelte?raw";
import Sizes from "./sizes.svelte?raw";
import Testimonial from "./testimonial.svelte?raw";

export const imports = `import { Rating } from "@pisagor/svelte";`;

export const sources = {
  Compound,
  Controlled,
  Count,
  CustomColor,
  CustomIcon,
  CustomRecipe,
  CustomSize,
  Default,
  Disabled,
  HalfStar,
  Invalid,
  Readonly,
  Sizes,
  Testimonial,
} as const;
