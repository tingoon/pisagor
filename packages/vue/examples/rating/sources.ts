import compoundRaw from "./compound.vue?raw";
import controlledRaw from "./controlled.vue?raw";
import countRaw from "./count.vue?raw";
import custom_colorRaw from "./custom-color.vue?raw";
import custom_iconRaw from "./custom-icon.vue?raw";
import custom_recipeRaw from "./custom-recipe.vue?raw";
import custom_sizeRaw from "./custom-size.vue?raw";
import defaultRaw from "./default.vue?raw";
import disabledRaw from "./disabled.vue?raw";
import half_starRaw from "./half-star.vue?raw";
import invalidRaw from "./invalid.vue?raw";
import readonlyRaw from "./readonly.vue?raw";
import sizesRaw from "./sizes.vue?raw";
import testimonialRaw from "./testimonial.vue?raw";

export const imports = `import { Rating } from "@pisagor/vue";`;

export const sources = {
  Compound: compoundRaw,
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
  Sizes: sizesRaw,
  Testimonial: testimonialRaw,
} as const;
