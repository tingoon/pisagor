import controlledRaw from "./controlled.svelte?raw";
import countRaw from "./count.svelte?raw";
import custom_colorRaw from "./custom-color.svelte?raw";
import custom_iconRaw from "./custom-icon.svelte?raw";
import custom_recipeRaw from "./custom-recipe.svelte?raw";
import custom_sizeRaw from "./custom-size.svelte?raw";
import defaultRaw from "./default.svelte?raw";
import disabledRaw from "./disabled.svelte?raw";
import half_starRaw from "./half-star.svelte?raw";
import invalidRaw from "./invalid.svelte?raw";
import readonlyRaw from "./readonly.svelte?raw";
import testimonialRaw from "./testimonial.svelte?raw";

export const imports = `import { Rating } from "@pisagor/svelte";`;

export const sources = {
  Controlled: controlledRaw,
  Count: countRaw,
  CustomColor: custom_colorRaw,
  CustomIcon: custom_iconRaw,
  CustomRecipe: custom_recipeRaw,
  CustomSize: custom_sizeRaw,
  Default: defaultRaw,
  Disabled: disabledRaw,
  HalfStar: half_starRaw,
  Invalid: invalidRaw,
  Readonly: readonlyRaw,
  Testimonial: testimonialRaw,
} as const;
