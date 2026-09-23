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

export const imports = `import { Marquee } from "@pisagor/react/marquee";`;

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

export { Autofill } from "./autofill";
export { Compound } from "./compound";
export { CustomSpeed } from "./custom-speed";
export { Default } from "./default";
export { Fade } from "./fade";
export { OrientationHorizontal } from "./orientation-horizontal";
export { OrientationVertical } from "./orientation-vertical";
export { PauseOnHover } from "./pause-on-hover";
export { Reverse } from "./reverse";
export { Spacing } from "./spacing";
