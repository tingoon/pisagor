import align_block_endRaw from "./align-block-end.astro?raw";
import align_block_startRaw from "./align-block-start.astro?raw";
import align_inline_endRaw from "./align-inline-end.astro?raw";
import align_inline_startRaw from "./align-inline-start.astro?raw";
import disabledRaw from "./disabled.astro?raw";
import invalidRaw from "./invalid.astro?raw";
import sizesRaw from "./sizes.astro?raw";
import variantsRaw from "./variants.astro?raw";
import with_badgeRaw from "./with-badge.astro?raw";
import with_keyboard_shortcutRaw from "./with-keyboard-shortcut.astro?raw";
import with_spinnerRaw from "./with-spinner.astro?raw";
import with_textareaRaw from "./with-textarea.astro?raw";

export const imports = `---
import { InputGroup } from "@pisagor/astro";
---`;

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
