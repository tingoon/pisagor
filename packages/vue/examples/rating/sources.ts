import Compound from "./compound.vue?raw";
import Controlled from "./controlled.vue?raw";
import Count from "./count.vue?raw";
import CustomColor from "./custom-color.vue?raw";
import CustomIcon from "./custom-icon.vue?raw";
import CustomRecipe from "./custom-recipe.vue?raw";
import CustomSize from "./custom-size.vue?raw";
import Default from "./default.vue?raw";
import Disabled from "./disabled.vue?raw";
import HalfStar from "./half-star.vue?raw";
import Invalid from "./invalid.vue?raw";
import Readonly from "./readonly.vue?raw";
import Sizes from "./sizes.vue?raw";
import Testimonial from "./testimonial.vue?raw";

export const imports = `import { Rating } from "@pisagor/vue";`;

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
