import { CompoundSource as Compound } from "./compound";
import { ControlledSource as Controlled } from "./controlled";
import { CountSource as Count } from "./count";
import { CustomColorSource as CustomColor } from "./custom-color";
import { CustomIconSource as CustomIcon } from "./custom-icon";
import { CustomRecipeSource as CustomRecipe } from "./custom-recipe";
import { CustomSizeSource as CustomSize } from "./custom-size";
import { DefaultSource as Default } from "./default";
import { DisabledSource as Disabled } from "./disabled";
import { HalfStarSource as HalfStar } from "./half-star";
import { InvalidSource as Invalid } from "./invalid";
import { ReadonlySource as Readonly } from "./readonly";
import { SizesSource as Sizes } from "./sizes";
import { TestimonialSource as Testimonial } from "./testimonial";

export const imports = `import { Rating } from "@pisagor/react";`;

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
