import { AcceptSource as Accept } from "./accept";
import { DisabledSource as Disabled } from "./disabled";
import { InvalidSource as Invalid } from "./invalid";
import { MultipleSource as Multiple } from "./multiple";
import { OnFilesChangeSource as OnFilesChange } from "./on-files-change";
import { SizesSource as Sizes } from "./sizes";
import { VariantsSource as Variants } from "./variants";

export const imports = `import { FileInput } from "@pisagor/solid";`;

export const sources = {
  Accept,
  Disabled,
  Invalid,
  Multiple,
  OnFilesChange,
  Sizes,
  Variants,
} as const;
