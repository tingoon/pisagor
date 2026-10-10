import align_block_endRaw from "./align-block-end.svelte?raw";
import align_block_startRaw from "./align-block-start.svelte?raw";
import align_inline_endRaw from "./align-inline-end.svelte?raw";
import align_inline_startRaw from "./align-inline-start.svelte?raw";
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
  Disabled: disabledRaw,
  Invalid: invalidRaw,
  Sizes: sizesRaw,
  Variants: variantsRaw,
  WithBadge: with_badgeRaw,
  WithKeyboardShortcut: with_keyboard_shortcutRaw,
  WithSpinner: with_spinnerRaw,
  WithTextarea: with_textareaRaw,
} as const;
