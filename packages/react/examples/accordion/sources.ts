import { CompoundSource as Compound } from "./compound";
import { ControlledSource as Controlled } from "./controlled";
import { DefaultSource as Default } from "./default";
import { DisabledSource as Disabled } from "./disabled";
import { MultipleSource as Multiple } from "./multiple";
import { NonCollapsibleSource as NonCollapsible } from "./non-collapsible";
import { SizesSource as Sizes } from "./sizes";
import { WithCardSource as WithCard } from "./with-card";

export const imports = `import { Accordion } from "@pisagor/react";`;

export const sources = {
  Compound,
  Controlled,
  Default,
  Disabled,
  Multiple,
  NonCollapsible,
  Sizes,
  WithCard,
} as const;
