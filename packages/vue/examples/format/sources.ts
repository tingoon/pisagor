import Byte from "./byte.vue?raw";
import ByteUnitDisplay from "./byte-unit-display.vue?raw";
import ByteUnitSystem from "./byte-unit-system.vue?raw";
import Default from "./default.vue?raw";
import NumberCompact from "./number-compact.vue?raw";
import NumberCurrency from "./number-currency.vue?raw";
import NumberPercent from "./number-percent.vue?raw";
import NumberStory from "./number-story.vue?raw";
import RelativeTime from "./relative-time.vue?raw";
import RelativeTimeShort from "./relative-time-short.vue?raw";

export const imports = `import { Format } from "@pisagor/vue";`;

export const sources = {
  Byte,
  ByteUnitDisplay,
  ByteUnitSystem,
  Default,
  NumberCompact,
  NumberCurrency,
  NumberPercent,
  NumberStory,
  RelativeTime,
  RelativeTimeShort,
} as const;
