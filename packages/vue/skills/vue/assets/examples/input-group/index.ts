import { stripVueExample } from "@pisagor/utils";
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

export const imports = `import { InputGroup } from "@pisagor/vue/input-group";`;

export const sources = {
  AlignBlockEnd: stripVueExample(align_block_endRaw),
  AlignBlockStart: stripVueExample(align_block_startRaw),
  AlignInlineEnd: stripVueExample(align_inline_endRaw),
  AlignInlineStart: stripVueExample(align_inline_startRaw),
  Default: stripVueExample(defaultRaw),
  Disabled: stripVueExample(disabledRaw),
  Invalid: stripVueExample(invalidRaw),
  OnSurface: stripVueExample(on_surfaceRaw),
  Sizes: stripVueExample(sizesRaw),
  Variants: stripVueExample(variantsRaw),
  WithBadge: stripVueExample(with_badgeRaw),
  WithKeyboardShortcut: stripVueExample(with_keyboard_shortcutRaw),
  WithSpinner: stripVueExample(with_spinnerRaw),
  WithText: stripVueExample(with_textRaw),
  WithTextarea: stripVueExample(with_textareaRaw),
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
