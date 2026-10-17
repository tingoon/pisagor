import AlignBlockEnd from "./align-block-end.svelte?raw";
import AlignBlockStart from "./align-block-start.svelte?raw";
import AlignInlineEnd from "./align-inline-end.svelte?raw";
import AlignInlineStart from "./align-inline-start.svelte?raw";
import Disabled from "./disabled.svelte?raw";
import Invalid from "./invalid.svelte?raw";
import Sizes from "./sizes.svelte?raw";
import Variants from "./variants.svelte?raw";
import WithBadge from "./with-badge.svelte?raw";
import WithKeyboardShortcut from "./with-keyboard-shortcut.svelte?raw";
import WithSpinner from "./with-spinner.svelte?raw";
import WithTextarea from "./with-textarea.svelte?raw";

export const imports = `import { InputGroup } from "@pisagor/svelte";`;

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
