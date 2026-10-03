import { stripTsxExample } from "@pisagor/utils";
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

export const imports = `import { InputGroup } from "@pisagor/react/input-group";`;

export const sources = {
  AlignBlockEnd: stripTsxExample(align_block_endRaw),
  AlignBlockStart: stripTsxExample(align_block_startRaw),
  AlignInlineEnd: stripTsxExample(align_inline_endRaw),
  AlignInlineStart: stripTsxExample(align_inline_startRaw),
  Default: stripTsxExample(defaultRaw),
  Disabled: stripTsxExample(disabledRaw),
  Invalid: stripTsxExample(invalidRaw),
  Sizes: stripTsxExample(sizesRaw),
  Variants: stripTsxExample(variantsRaw),
  WithBadge: stripTsxExample(with_badgeRaw),
  WithKeyboardShortcut: stripTsxExample(with_keyboard_shortcutRaw),
  WithSpinner: stripTsxExample(with_spinnerRaw),
  WithTextarea: stripTsxExample(with_textareaRaw),
} as const;

export { AlignBlockEnd } from "./align-block-end";
export { AlignBlockStart } from "./align-block-start";
export { AlignInlineEnd } from "./align-inline-end";
export { AlignInlineStart } from "./align-inline-start";
export { Default } from "./default";
export { Disabled } from "./disabled";
export { Invalid } from "./invalid";
export { Sizes } from "./sizes";
export { Variants } from "./variants";
export { WithBadge } from "./with-badge";
export { WithKeyboardShortcut } from "./with-keyboard-shortcut";
export { WithSpinner } from "./with-spinner";
export { WithTextarea } from "./with-textarea";
