import align_block_endRaw from "./align-block-end.vue?raw";
import align_block_startRaw from "./align-block-start.vue?raw";
import align_inline_endRaw from "./align-inline-end.vue?raw";
import align_inline_startRaw from "./align-inline-start.vue?raw";
import defaultRaw from "./default.vue?raw";
import disabledRaw from "./disabled.vue?raw";
import invalidRaw from "./invalid.vue?raw";
import on_surfaceRaw from "./on-surface.vue?raw";
import sizesRaw from "./sizes.vue?raw";
import variantsRaw from "./variants.vue?raw";
import with_badgeRaw from "./with-badge.vue?raw";
import with_keyboard_shortcutRaw from "./with-keyboard-shortcut.vue?raw";
import with_spinnerRaw from "./with-spinner.vue?raw";
import with_textRaw from "./with-text.vue?raw";
import with_textareaRaw from "./with-textarea.vue?raw";

export const imports = `import { InputGroup } from "@pisagor/vue";`;

export const sources = {
  AlignBlockEnd: align_block_endRaw,
  AlignBlockStart: align_block_startRaw,
  AlignInlineEnd: align_inline_endRaw,
  AlignInlineStart: align_inline_startRaw,
  Default: defaultRaw,
  Disabled: disabledRaw,
  Invalid: invalidRaw,
  OnSurface: on_surfaceRaw,
  Sizes: sizesRaw,
  Variants: variantsRaw,
  WithBadge: with_badgeRaw,
  WithKeyboardShortcut: with_keyboard_shortcutRaw,
  WithSpinner: with_spinnerRaw,
  WithText: with_textRaw,
  WithTextarea: with_textareaRaw,
} as const;

export { default as AlignBlockEnd } from "./align-block-end.vue";
export { default as AlignBlockStart } from "./align-block-start.vue";
export { default as AlignInlineEnd } from "./align-inline-end.vue";
export { default as AlignInlineStart } from "./align-inline-start.vue";
export { default as Default } from "./default.vue";
export { default as Disabled } from "./disabled.vue";
export { default as Invalid } from "./invalid.vue";
export { default as OnSurface } from "./on-surface.vue";
export { default as Sizes } from "./sizes.vue";
export { default as Variants } from "./variants.vue";
export { default as WithBadge } from "./with-badge.vue";
export { default as WithKeyboardShortcut } from "./with-keyboard-shortcut.vue";
export { default as WithSpinner } from "./with-spinner.vue";
export { default as WithText } from "./with-text.vue";
export { default as WithTextarea } from "./with-textarea.vue";
