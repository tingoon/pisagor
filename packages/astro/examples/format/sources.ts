import Byte from "./byte.astro?raw";
import ByteUnitDisplay from "./byte-unit-display.astro?raw";
import ByteUnitSystem from "./byte-unit-system.astro?raw";
import Default from "./default.astro?raw";
import NumberCompact from "./number-compact.astro?raw";
import NumberCurrency from "./number-currency.astro?raw";
import NumberPercent from "./number-percent.astro?raw";
import NumberStory from "./number-story.astro?raw";
import RelativeTime from "./relative-time.astro?raw";
import RelativeTimeShort from "./relative-time-short.astro?raw";

export const imports = `---
import { Format } from "@pisagor/astro";
---`;

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
