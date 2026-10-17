import Anchor from "./anchor.svelte?raw";
import CloseBehavior from "./close-behavior.svelte?raw";
import CloseButton from "./close-button.svelte?raw";
import CustomSpacing from "./custom-spacing.svelte?raw";
import Default from "./default.svelte?raw";
import Modal from "./modal.svelte?raw";
import Nested from "./nested.svelte?raw";
import Placements from "./placements.svelte?raw";
import ScrollArea from "./scroll-area.svelte?raw";

export const imports = `import { Popover } from "@pisagor/svelte";`;

export const sources = {
  Anchor,
  CloseBehavior,
  CloseButton,
  CustomSpacing,
  Default,
  Modal,
  Nested,
  Placements,
  ScrollArea,
} as const;
