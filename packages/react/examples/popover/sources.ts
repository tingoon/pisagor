import { AnchorSource as Anchor } from "./anchor";
import { CloseBehaviorSource as CloseBehavior } from "./close-behavior";
import { CloseButtonSource as CloseButton } from "./close-button";
import { CustomSpacingSource as CustomSpacing } from "./custom-spacing";
import { DefaultSource as Default } from "./default";
import { ModalSource as Modal } from "./modal";
import { NestedSource as Nested } from "./nested";
import { PlacementsSource as Placements } from "./placements";
import { ScrollAreaSource as ScrollArea } from "./scroll-area";

export const imports = `import { Popover } from "@pisagor/react";`;

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
