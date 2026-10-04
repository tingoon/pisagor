import { stripVueExample } from "@pisagor/utils";
import autofillRaw from "./autofill.ts?raw";
import compoundRaw from "./compound.ts?raw";
import custom_speedRaw from "./custom-speed.ts?raw";
import defaultRaw from "./default.ts?raw";
import fadeRaw from "./fade.ts?raw";
import orientation_horizontalRaw from "./orientation-horizontal.ts?raw";
import orientation_verticalRaw from "./orientation-vertical.ts?raw";
import pause_on_hoverRaw from "./pause-on-hover.ts?raw";
import reverseRaw from "./reverse.ts?raw";
import spacingRaw from "./spacing.ts?raw";

export const imports = `import { Marquee } from "@pisagor/vue/marquee";`;

export const sources = {
  Autofill: stripVueExample(autofillRaw),
  Compound: stripVueExample(compoundRaw),
  CustomSpeed: stripVueExample(custom_speedRaw),
  Default: stripVueExample(defaultRaw),
  Fade: stripVueExample(fadeRaw),
  OrientationHorizontal: stripVueExample(orientation_horizontalRaw),
  OrientationVertical: stripVueExample(orientation_verticalRaw),
  PauseOnHover: stripVueExample(pause_on_hoverRaw),
  Reverse: stripVueExample(reverseRaw),
  Spacing: stripVueExample(spacingRaw),
} as const;

export { default as Autofill } from "./autofill";
export { default as Compound } from "./compound";
export { default as CustomSpeed } from "./custom-speed";
export { default as Default } from "./default";
export { default as Fade } from "./fade";
export { default as OrientationHorizontal } from "./orientation-horizontal";
export { default as OrientationVertical } from "./orientation-vertical";
export { default as PauseOnHover } from "./pause-on-hover";
export { default as Reverse } from "./reverse";
export { default as Spacing } from "./spacing";
