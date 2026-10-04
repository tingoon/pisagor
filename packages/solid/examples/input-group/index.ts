import align_block_endRaw from "./align-block-end.tsx?raw";
import align_block_startRaw from "./align-block-start.tsx?raw";
import align_inline_endRaw from "./align-inline-end.tsx?raw";
import align_inline_startRaw from "./align-inline-start.tsx?raw";
import defaultRaw from "./default.tsx?raw";
import disabledRaw from "./disabled.tsx?raw";
import invalidRaw from "./invalid.tsx?raw";
import sizesRaw from "./sizes.tsx?raw";
import variantsRaw from "./variants.tsx?raw";
import with_badgeRaw from "./with-badge.tsx?raw";
import with_keyboard_shortcutRaw from "./with-keyboard-shortcut.tsx?raw";
import with_spinnerRaw from "./with-spinner.tsx?raw";
import with_textareaRaw from "./with-textarea.tsx?raw";

export const imports = `import { InputGroup } from "@pisagor/solid";`;

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

export * from "./align-block-end";
export * from "./align-block-start";
export * from "./align-inline-end";
export * from "./align-inline-start";
export * from "./default";
export * from "./disabled";
export * from "./invalid";
export * from "./sizes";
export * from "./variants";
export * from "./with-badge";
export * from "./with-keyboard-shortcut";
export * from "./with-spinner";
export * from "./with-textarea";
