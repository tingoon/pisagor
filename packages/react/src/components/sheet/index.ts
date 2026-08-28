export type {
  SheetCloseTriggerProps,
  SheetContentProps,
  SheetPositionerProps,
  SheetProps,
  SheetTriggerProps,
} from "./sheet";

import {
  SheetBackdrop,
  SheetBody,
  SheetCloseTrigger,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetPositioner,
  SheetRoot,
  SheetTitle,
  SheetTrigger,
} from "./sheet";

export const Sheet = Object.assign(SheetRoot, {
  Backdrop: SheetBackdrop,
  Body: SheetBody,
  CloseTrigger: SheetCloseTrigger,
  Content: SheetContent,
  Description: SheetDescription,
  Footer: SheetFooter,
  Header: SheetHeader,
  Positioner: SheetPositioner,
  Title: SheetTitle,
  Trigger: SheetTrigger,
});
