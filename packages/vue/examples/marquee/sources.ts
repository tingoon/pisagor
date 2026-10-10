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

export const imports = `import { Marquee } from "@pisagor/vue";`;

export const sources = {
  Autofill: autofillRaw,
  Compound: compoundRaw,
  CustomSpeed: custom_speedRaw,
  Default: defaultRaw,
  Fade: fadeRaw,
  OrientationHorizontal: orientation_horizontalRaw,
  OrientationVertical: orientation_verticalRaw,
  PauseOnHover: pause_on_hoverRaw,
  Reverse: reverseRaw,
  Spacing: spacingRaw,
} as const;
