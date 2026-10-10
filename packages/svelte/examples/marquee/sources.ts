import autofillRaw from "./autofill.svelte?raw";
import compoundRaw from "./compound.svelte?raw";
import custom_speedRaw from "./custom-speed.svelte?raw";
import defaultRaw from "./default.svelte?raw";
import fadeRaw from "./fade.svelte?raw";
import marquee_icon_rowRaw from "./marquee-icon-row.svelte?raw";
import orientation_horizontalRaw from "./orientation-horizontal.svelte?raw";
import orientation_verticalRaw from "./orientation-vertical.svelte?raw";
import pause_on_hoverRaw from "./pause-on-hover.svelte?raw";
import reverseRaw from "./reverse.svelte?raw";
import spacingRaw from "./spacing.svelte?raw";

export const imports = `import { Marquee } from "@pisagor/svelte";`;

export const sources = {
  Autofill: autofillRaw,
  Compound: compoundRaw,
  CustomSpeed: custom_speedRaw,
  Default: defaultRaw,
  Fade: fadeRaw,
  MarqueeIconRow: marquee_icon_rowRaw,
  OrientationHorizontal: orientation_horizontalRaw,
  OrientationVertical: orientation_verticalRaw,
  PauseOnHover: pause_on_hoverRaw,
  Reverse: reverseRaw,
  Spacing: spacingRaw,
} as const;
