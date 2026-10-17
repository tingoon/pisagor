import { CompoundSource as Compound } from "./compound";
import { ControlledSource as Controlled } from "./controlled";
import { DefaultSource as Default } from "./default";
import { DisabledSource as Disabled } from "./disabled";
import { InvalidSource as Invalid } from "./invalid";
import { VariantsSource as Variants } from "./variants";
import { WithDescriptionSource as WithDescription } from "./with-description";

export const imports = `import { RadioGroup } from "@pisagor/solid";`;

export const sources = {
  Compound,
  Controlled,
  Default,
  Disabled,
  Invalid,
  Variants,
  WithDescription,
} as const;
