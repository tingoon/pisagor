import { AlignBlockEndSource as AlignBlockEnd } from "./align-block-end";
import { AlignBlockStartSource as AlignBlockStart } from "./align-block-start";
import { AlignInlineEndSource as AlignInlineEnd } from "./align-inline-end";
import { AlignInlineStartSource as AlignInlineStart } from "./align-inline-start";
import { DisabledSource as Disabled } from "./disabled";
import { InvalidSource as Invalid } from "./invalid";
import { SizesSource as Sizes } from "./sizes";
import { VariantsSource as Variants } from "./variants";
import { WithBadgeSource as WithBadge } from "./with-badge";
import { WithKeyboardShortcutSource as WithKeyboardShortcut } from "./with-keyboard-shortcut";
import { WithSpinnerSource as WithSpinner } from "./with-spinner";
import { WithTextareaSource as WithTextarea } from "./with-textarea";

export const imports = `import { InputGroup } from "@pisagor/solid";`;

export const sources = {
  AlignBlockEnd,
  AlignBlockStart,
  AlignInlineEnd,
  AlignInlineStart,
  Disabled,
  Invalid,
  Sizes,
  Variants,
  WithBadge,
  WithKeyboardShortcut,
  WithSpinner,
  WithTextarea,
} as const;
