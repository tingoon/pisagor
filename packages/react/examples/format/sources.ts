import { ByteSource as Byte } from "./byte";
import { ByteUnitDisplaySource as ByteUnitDisplay } from "./byte-unit-display";
import { ByteUnitSystemSource as ByteUnitSystem } from "./byte-unit-system";
import { DefaultSource as Default } from "./default";
import { NumberCompactSource as NumberCompact } from "./number-compact";
import { NumberCurrencySource as NumberCurrency } from "./number-currency";
import { NumberPercentSource as NumberPercent } from "./number-percent";
import { NumberStorySource as NumberStory } from "./number-story";
import { RelativeTimeSource as RelativeTime } from "./relative-time";
import { RelativeTimeShortSource as RelativeTimeShort } from "./relative-time-short";

export const imports = `import { Format } from "@pisagor/react";`;

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
