import { stripSvelteExample } from "@pisagor/utils";
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

export const imports = `import { Rating } from "@pisagor/svelte/rating";`;

export const sources = {
  Controlled: stripSvelteExample(controlledRaw),
  Count: stripSvelteExample(countRaw),
  CustomColor: stripSvelteExample(custom_colorRaw),
  CustomIcon: stripSvelteExample(custom_iconRaw),
  CustomSize: stripSvelteExample(custom_sizeRaw),
  Default: stripSvelteExample(defaultRaw),
  Disabled: stripSvelteExample(disabledRaw),
  HalfStar: stripSvelteExample(half_starRaw),
  Invalid: stripSvelteExample(invalidRaw),
  Readonly: stripSvelteExample(readonlyRaw),
  Testimonial: stripSvelteExample(testimonialRaw),
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
