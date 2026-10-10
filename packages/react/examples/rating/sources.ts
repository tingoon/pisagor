import controlledRaw from "./controlled.tsx?raw";
import countRaw from "./count.tsx?raw";
import custom_colorRaw from "./custom-color.tsx?raw";
import custom_iconRaw from "./custom-icon.tsx?raw";
import custom_recipeRaw from "./custom-recipe.tsx?raw";
import custom_sizeRaw from "./custom-size.tsx?raw";
import defaultRaw from "./default.tsx?raw";
import disabledRaw from "./disabled.tsx?raw";
import half_starRaw from "./half-star.tsx?raw";
import invalidRaw from "./invalid.tsx?raw";
import readonlyRaw from "./readonly.tsx?raw";
import testimonialRaw from "./testimonial.tsx?raw";

export const imports = `import { Rating } from "@pisagor/react";`;

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
