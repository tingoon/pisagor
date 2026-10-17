import Byte from "./byte.svelte?raw";
import ByteUnitDisplay from "./byte-unit-display.svelte?raw";
import ByteUnitSystem from "./byte-unit-system.svelte?raw";
import Default from "./default.svelte?raw";
import NumberCompact from "./number-compact.svelte?raw";
import NumberCurrency from "./number-currency.svelte?raw";
import NumberPercent from "./number-percent.svelte?raw";
import NumberStory from "./number-story.svelte?raw";
import RelativeTime from "./relative-time.svelte?raw";
import RelativeTimeShort from "./relative-time-short.svelte?raw";

export const imports = `import { Format } from "@pisagor/svelte";`;

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
