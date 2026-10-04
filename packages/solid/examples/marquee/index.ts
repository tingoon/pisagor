import { stripTsxExample } from "@pisagor/utils";
import autofillRaw from "./autofill.tsx?raw";
import compoundRaw from "./compound.tsx?raw";
import custom_speedRaw from "./custom-speed.tsx?raw";
import defaultRaw from "./default.tsx?raw";
import fadeRaw from "./fade.tsx?raw";
import orientation_horizontalRaw from "./orientation-horizontal.tsx?raw";
import orientation_verticalRaw from "./orientation-vertical.tsx?raw";
import pause_on_hoverRaw from "./pause-on-hover.tsx?raw";
import reverseRaw from "./reverse.tsx?raw";
import spacingRaw from "./spacing.tsx?raw";

export const imports = `import { Marquee } from "@pisagor/solid";`;

export const sources = {
  Autofill: stripTsxExample(autofillRaw),
  Compound: stripTsxExample(compoundRaw),
  CustomSpeed: stripTsxExample(custom_speedRaw),
  Default: stripTsxExample(defaultRaw),
  Fade: stripTsxExample(fadeRaw),
  OrientationHorizontal: stripTsxExample(orientation_horizontalRaw),
  OrientationVertical: stripTsxExample(orientation_verticalRaw),
  PauseOnHover: stripTsxExample(pause_on_hoverRaw),
  Reverse: stripTsxExample(reverseRaw),
  Spacing: stripTsxExample(spacingRaw),
} as const;

export * from "./autofill";
export * from "./compound";
export * from "./custom-speed";
export * from "./default";
export * from "./fade";
export * from "./orientation-horizontal";
export * from "./orientation-vertical";
export * from "./pause-on-hover";
export * from "./reverse";
export * from "./spacing";
