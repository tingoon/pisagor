import Compound from "./compound.vue?raw";
import Default from "./default.vue?raw";
import InfoTip from "./info-tip.vue?raw";
import OrientationHorizontal from "./orientation-horizontal.vue?raw";
import OrientationVertical from "./orientation-vertical.vue?raw";
import Separator from "./separator.vue?raw";

export const imports = `import { DataList } from "@pisagor/vue";`;

export const sources = {
  Compound,
  Default,
  InfoTip,
  OrientationHorizontal,
  OrientationVertical,
  Separator,
} as const;
