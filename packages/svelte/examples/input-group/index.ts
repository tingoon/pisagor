import align_block_endRaw from "./align-block-end.svelte?raw";
import align_block_startRaw from "./align-block-start.svelte?raw";
import align_inline_endRaw from "./align-inline-end.svelte?raw";
import align_inline_startRaw from "./align-inline-start.svelte?raw";
import defaultRaw from "./default.svelte?raw";
import disabledRaw from "./disabled.svelte?raw";
import invalidRaw from "./invalid.svelte?raw";
import sizesRaw from "./sizes.svelte?raw";
import variantsRaw from "./variants.svelte?raw";
import with_badgeRaw from "./with-badge.svelte?raw";
import with_keyboard_shortcutRaw from "./with-keyboard-shortcut.svelte?raw";
import with_spinnerRaw from "./with-spinner.svelte?raw";
import with_textareaRaw from "./with-textarea.svelte?raw";

export const imports = `import { InputGroup } from "@pisagor/svelte";`;

export const sources = {
  AlignBlockEnd: align_block_endRaw,
  AlignBlockStart: align_block_startRaw,
  AlignInlineEnd: align_inline_endRaw,
  AlignInlineStart: align_inline_startRaw,
  Default: defaultRaw,
  Disabled: disabledRaw,
  Invalid: invalidRaw,
  Sizes: sizesRaw,
  Variants: variantsRaw,
  WithBadge: with_badgeRaw,
  WithKeyboardShortcut: with_keyboard_shortcutRaw,
  WithSpinner: with_spinnerRaw,
  WithTextarea: with_textareaRaw,
} as const;

export { default as AlignBlockEnd } from "./align-block-end.svelte";
export { default as AlignBlockStart } from "./align-block-start.svelte";
export { default as AlignInlineEnd } from "./align-inline-end.svelte";
export { default as AlignInlineStart } from "./align-inline-start.svelte";
export { default as Default } from "./default.svelte";
export { default as Disabled } from "./disabled.svelte";
export { default as Invalid } from "./invalid.svelte";
export { default as Sizes } from "./sizes.svelte";
export { default as Variants } from "./variants.svelte";
export { default as WithBadge } from "./with-badge.svelte";
export { default as WithKeyboardShortcut } from "./with-keyboard-shortcut.svelte";
export { default as WithSpinner } from "./with-spinner.svelte";
export { default as WithTextarea } from "./with-textarea.svelte";
