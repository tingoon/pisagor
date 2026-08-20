export type {
  SheetCloseProps,
  SheetContentProps,
  SheetPositionerProps,
  SheetProps,
  SheetTriggerProps,
} from "./sheet";

import {
  SheetBody,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetOverlay,
  SheetPositioner,
  SheetRoot,
  SheetTitle,
  SheetTrigger,
} from "./sheet";

export const Sheet = Object.assign(SheetRoot, {
  Body: SheetBody,
  Close: SheetClose,
  Content: SheetContent,
  Description: SheetDescription,
  Footer: SheetFooter,
  Header: SheetHeader,
  Overlay: SheetOverlay,
  Positioner: SheetPositioner,
  Title: SheetTitle,
  Trigger: SheetTrigger,
});
