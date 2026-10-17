import { CompoundSource as Compound } from "./compound";
import { DefaultSource as Default } from "./default";
import { InfoTipSource as InfoTip } from "./info-tip";
import { OrientationHorizontalSource as OrientationHorizontal } from "./orientation-horizontal";
import { OrientationVerticalSource as OrientationVertical } from "./orientation-vertical";
import { SeparatorSource as Separator } from "./separator";

export const imports = `import { DataList } from "@pisagor/solid";`;

export const sources = {
  Compound,
  Default,
  InfoTip,
  OrientationHorizontal,
  OrientationVertical,
  Separator,
} as const;
