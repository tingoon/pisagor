import AlignBlockEnd from "./align-block-end.vue?raw";
import AlignBlockStart from "./align-block-start.vue?raw";
import AlignInlineEnd from "./align-inline-end.vue?raw";
import AlignInlineStart from "./align-inline-start.vue?raw";
import Disabled from "./disabled.vue?raw";
import Invalid from "./invalid.vue?raw";
import Sizes from "./sizes.vue?raw";
import Variants from "./variants.vue?raw";
import WithBadge from "./with-badge.vue?raw";
import WithKeyboardShortcut from "./with-keyboard-shortcut.vue?raw";
import WithSpinner from "./with-spinner.vue?raw";
import WithTextarea from "./with-textarea.vue?raw";

export const imports = `import { InputGroup } from "@pisagor/vue";`;

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
