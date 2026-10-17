import AlignBlockEnd from "./align-block-end.astro?raw";
import AlignBlockStart from "./align-block-start.astro?raw";
import AlignInlineEnd from "./align-inline-end.astro?raw";
import AlignInlineStart from "./align-inline-start.astro?raw";
import Disabled from "./disabled.astro?raw";
import Invalid from "./invalid.astro?raw";
import Sizes from "./sizes.astro?raw";
import Variants from "./variants.astro?raw";
import WithBadge from "./with-badge.astro?raw";
import WithKeyboardShortcut from "./with-keyboard-shortcut.astro?raw";
import WithSpinner from "./with-spinner.astro?raw";
import WithTextarea from "./with-textarea.astro?raw";

export const imports = `---
import { InputGroup } from "@pisagor/astro";
---`;

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
