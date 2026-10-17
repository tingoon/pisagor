import { AutofillSource as Autofill } from "./autofill";
import { CompoundSource as Compound } from "./compound";
import { CustomSpeedSource as CustomSpeed } from "./custom-speed";
import { DefaultSource as Default } from "./default";
import { FadeSource as Fade } from "./fade";
import { OrientationHorizontalSource as OrientationHorizontal } from "./orientation-horizontal";
import { OrientationVerticalSource as OrientationVertical } from "./orientation-vertical";
import { PauseOnHoverSource as PauseOnHover } from "./pause-on-hover";
import { ReverseSource as Reverse } from "./reverse";
import { SpacingSource as Spacing } from "./spacing";

export const imports = `import { Marquee } from "@pisagor/solid";`;

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
