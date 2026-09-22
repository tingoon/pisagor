import { stripTsxExample } from "@pisagor/utils";
import controlledRaw from "./controlled.tsx?raw";
import countRaw from "./count.tsx?raw";
import custom_colorRaw from "./custom-color.tsx?raw";
import custom_iconRaw from "./custom-icon.tsx?raw";
import custom_sizeRaw from "./custom-size.tsx?raw";
import disabledRaw from "./disabled.tsx?raw";
import half_starRaw from "./half-star.tsx?raw";
import invalidRaw from "./invalid.tsx?raw";
import readonlyRaw from "./readonly.tsx?raw";
import testimonialRaw from "./testimonial.tsx?raw";

export const imports = `import { Rating } from "@pisagor/react/rating";`;

export const sources = {
  Controlled: stripTsxExample(controlledRaw),
  Count: stripTsxExample(countRaw),
  CustomColor: stripTsxExample(custom_colorRaw),
  CustomIcon: stripTsxExample(custom_iconRaw),
  CustomSize: stripTsxExample(custom_sizeRaw),
  Disabled: stripTsxExample(disabledRaw),
  HalfStar: stripTsxExample(half_starRaw),
  Invalid: stripTsxExample(invalidRaw),
  Readonly: stripTsxExample(readonlyRaw),
  Testimonial: stripTsxExample(testimonialRaw),
} as const;

export { Controlled } from "./controlled";
export { Count } from "./count";
export { CustomColor } from "./custom-color";
export { CustomIcon } from "./custom-icon";
export { CustomSize } from "./custom-size";
export { Disabled } from "./disabled";
export { HalfStar } from "./half-star";
export { Invalid } from "./invalid";
export { Readonly } from "./readonly";
export { Testimonial } from "./testimonial";
