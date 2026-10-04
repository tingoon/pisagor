import controlledRaw from "./controlled.svelte?raw";
import countRaw from "./count.svelte?raw";
import custom_colorRaw from "./custom-color.svelte?raw";
import custom_iconRaw from "./custom-icon.svelte?raw";
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
  CustomSize: custom_sizeRaw,
  Default: defaultRaw,
  Disabled: disabledRaw,
  HalfStar: half_starRaw,
  Invalid: invalidRaw,
  Readonly: readonlyRaw,
  Testimonial: testimonialRaw,
} as const;

export { default as Controlled } from "./controlled.svelte";
export { default as Count } from "./count.svelte";
export { default as CustomColor } from "./custom-color.svelte";
export { default as CustomIcon } from "./custom-icon.svelte";
export { default as CustomSize } from "./custom-size.svelte";
export { default as Default } from "./default.svelte";
export { default as Disabled } from "./disabled.svelte";
export { default as HalfStar } from "./half-star.svelte";
export { default as Invalid } from "./invalid.svelte";
export { default as Readonly } from "./readonly.svelte";
export { default as Testimonial } from "./testimonial.svelte";
