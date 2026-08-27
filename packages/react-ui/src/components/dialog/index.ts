import {
  DialogBackdrop,
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogPositioner,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "./dialog";

export type {
  DialogBackdropProps,
  DialogBodyProps,
  DialogCloseTriggerProps,
  DialogContentProps,
  DialogDescriptionProps,
  DialogFooterProps,
  DialogHeaderProps,
  DialogPositionerProps,
  DialogProps,
  DialogRootProps,
  DialogTitleProps,
  DialogTriggerProps,
} from "./dialog";

export const Dialog = Object.assign(DialogRoot, {
  Backdrop: DialogBackdrop,
  Body: DialogBody,
  CloseTrigger: DialogCloseTrigger,
  Content: DialogContent,
  Description: DialogDescription,
  Footer: DialogFooter,
  Header: DialogHeader,
  Positioner: DialogPositioner,
  Title: DialogTitle,
  Trigger: DialogTrigger,
});
