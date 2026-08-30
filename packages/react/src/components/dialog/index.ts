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
  DialogShorthand,
  DialogTitle,
  DialogTrigger,
} from "./dialog";

export type {
  DialogBackdropProps,
  DialogCloseTriggerProps,
  DialogDescriptionProps,
  DialogRootProps,
  DialogTitleProps,
  DialogTriggerProps,
} from "@ark-ui/react/dialog";

export type {
  DialogBodyProps,
  DialogContentProps,
  DialogFooterProps,
  DialogHeaderProps,
  DialogPositionerProps,
  DialogProps,
} from "./dialog";

export const Dialog = Object.assign(DialogShorthand, {
  Backdrop: DialogBackdrop,
  Body: DialogBody,
  CloseTrigger: DialogCloseTrigger,
  Content: DialogContent,
  Description: DialogDescription,
  Footer: DialogFooter,
  Header: DialogHeader,
  Positioner: DialogPositioner,
  Root: DialogRoot,
  Title: DialogTitle,
  Trigger: DialogTrigger,
});
