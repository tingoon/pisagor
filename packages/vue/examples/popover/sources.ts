import Anchor from "./anchor.ts?raw";
import CloseBehavior from "./close-behavior.ts?raw";
import CloseButton from "./close-button.ts?raw";
import CustomSpacing from "./custom-spacing.ts?raw";
import Default from "./default.ts?raw";
import Modal from "./modal.ts?raw";
import Nested from "./nested.ts?raw";
import Placements from "./placements.ts?raw";
import ScrollArea from "./scroll-area.ts?raw";

export const imports = `import { Popover } from "@pisagor/vue";`;

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
