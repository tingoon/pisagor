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

export const imports = `import { Marquee } from "@pisagor/react";`;

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
