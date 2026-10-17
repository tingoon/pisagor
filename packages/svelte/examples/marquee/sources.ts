import Autofill from "./autofill.svelte?raw";
import Compound from "./compound.svelte?raw";
import CustomSpeed from "./custom-speed.svelte?raw";
import Default from "./default.svelte?raw";
import Fade from "./fade.svelte?raw";
import MarqueeIconRow from "./marquee-icon-row.svelte?raw";
import OrientationHorizontal from "./orientation-horizontal.svelte?raw";
import OrientationVertical from "./orientation-vertical.svelte?raw";
import PauseOnHover from "./pause-on-hover.svelte?raw";
import Reverse from "./reverse.svelte?raw";
import Spacing from "./spacing.svelte?raw";

export const imports = `import { Marquee } from "@pisagor/svelte";`;

export const sources = {
  Autofill,
  Compound,
  CustomSpeed,
  Default,
  Fade,
  MarqueeIconRow,
  OrientationHorizontal,
  OrientationVertical,
  PauseOnHover,
  Reverse,
  Spacing,
} as const;
