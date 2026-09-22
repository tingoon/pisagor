import { stripVueExample } from "@pisagor/utils";
import controlledRaw from "./controlled.vue?raw";
import countRaw from "./count.vue?raw";
import custom_colorRaw from "./custom-color.vue?raw";
import custom_iconRaw from "./custom-icon.vue?raw";
import custom_sizeRaw from "./custom-size.vue?raw";
import defaultRaw from "./default.vue?raw";
import disabledRaw from "./disabled.vue?raw";
import half_starRaw from "./half-star.vue?raw";
import invalidRaw from "./invalid.vue?raw";
import on_surfaceRaw from "./on-surface.vue?raw";
import readonlyRaw from "./readonly.vue?raw";
import testimonialRaw from "./testimonial.vue?raw";

export const imports = `import { Rating } from "@pisagor/vue/rating";`;

export const sources = {
  Controlled: stripVueExample(controlledRaw),
  Count: stripVueExample(countRaw),
  CustomColor: stripVueExample(custom_colorRaw),
  CustomIcon: stripVueExample(custom_iconRaw),
  CustomSize: stripVueExample(custom_sizeRaw),
  Default: stripVueExample(defaultRaw),
  Disabled: stripVueExample(disabledRaw),
  HalfStar: stripVueExample(half_starRaw),
  Invalid: stripVueExample(invalidRaw),
  OnSurface: stripVueExample(on_surfaceRaw),
  Readonly: stripVueExample(readonlyRaw),
  Testimonial: stripVueExample(testimonialRaw),
} as const;

export { default as Controlled } from "./controlled.vue";
export { default as Count } from "./count.vue";
export { default as CustomColor } from "./custom-color.vue";
export { default as CustomIcon } from "./custom-icon.vue";
export { default as CustomSize } from "./custom-size.vue";
export { default as Default } from "./default.vue";
export { default as Disabled } from "./disabled.vue";
export { default as HalfStar } from "./half-star.vue";
export { default as Invalid } from "./invalid.vue";
export { default as OnSurface } from "./on-surface.vue";
export { default as Readonly } from "./readonly.vue";
export { default as Testimonial } from "./testimonial.vue";
