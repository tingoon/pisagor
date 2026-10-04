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

export const imports = `import { Rating } from "@pisagor/react";`;

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

export * from "./controlled";
export * from "./count";
export * from "./custom-color";
export * from "./custom-icon";
export * from "./custom-size";
export * from "./disabled";
export * from "./half-star";
export * from "./invalid";
export * from "./readonly";
export * from "./testimonial";
