import {
  DialogBody,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPositioner,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "./dialog";

export { dialogContentVariants, dialogOverlayVariants } from "@pisagor/styles/ui/dialog";
export type {
  DialogBodyProps,
  DialogCloseProps,
  DialogContentProps,
  DialogDescriptionProps,
  DialogFooterProps,
  DialogHeaderProps,
  DialogOverlayProps,
  DialogPositionerProps,
  DialogProps,
  DialogTitleProps,
  DialogTriggerProps,
} from "./dialog";

export const Dialog = Object.assign(DialogRoot, {
  Body: DialogBody,
  Close: DialogClose,
  Content: DialogContent,
  Description: DialogDescription,
  Footer: DialogFooter,
  Header: DialogHeader,
  Overlay: DialogOverlay,
  Positioner: DialogPositioner,
  Title: DialogTitle,
  Trigger: DialogTrigger,
});
