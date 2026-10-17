import Autofill from "./autofill.ts?raw";
import Compound from "./compound.ts?raw";
import CustomSpeed from "./custom-speed.ts?raw";
import Default from "./default.ts?raw";
import Fade from "./fade.ts?raw";
import OrientationHorizontal from "./orientation-horizontal.ts?raw";
import OrientationVertical from "./orientation-vertical.ts?raw";
import PauseOnHover from "./pause-on-hover.ts?raw";
import Reverse from "./reverse.ts?raw";
import Spacing from "./spacing.ts?raw";

export const imports = `import { Marquee } from "@pisagor/vue";`;

export const sources = {
  Autofill,
  Compound,
  CustomSpeed,
  Default,
  Fade,
  OrientationHorizontal,
  OrientationVertical,
  PauseOnHover,
  Reverse,
  Spacing,
} as const;
