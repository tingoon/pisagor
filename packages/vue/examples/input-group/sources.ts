import align_block_endRaw from "./align-block-end.vue?raw";
import align_block_startRaw from "./align-block-start.vue?raw";
import align_inline_endRaw from "./align-inline-end.vue?raw";
import align_inline_startRaw from "./align-inline-start.vue?raw";
import disabledRaw from "./disabled.vue?raw";
import invalidRaw from "./invalid.vue?raw";
import sizesRaw from "./sizes.vue?raw";
import variantsRaw from "./variants.vue?raw";
import with_badgeRaw from "./with-badge.vue?raw";
import with_keyboard_shortcutRaw from "./with-keyboard-shortcut.vue?raw";
import with_spinnerRaw from "./with-spinner.vue?raw";
import with_textareaRaw from "./with-textarea.vue?raw";

export const imports = `import { InputGroup } from "@pisagor/vue";`;

export const sources = {
  AlignBlockEnd: align_block_endRaw,
  AlignBlockStart: align_block_startRaw,
  AlignInlineEnd: align_inline_endRaw,
  AlignInlineStart: align_inline_startRaw,
  Disabled: disabledRaw,
  Invalid: invalidRaw,
  Sizes: sizesRaw,
  Variants: variantsRaw,
  WithBadge: with_badgeRaw,
  WithKeyboardShortcut: with_keyboard_shortcutRaw,
  WithSpinner: with_spinnerRaw,
  WithTextarea: with_textareaRaw,
} as const;
