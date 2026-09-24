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
  DialogTitleProps,
  DialogTriggerProps,
} from "@ark-ui/solid/dialog";

export type {
  DialogBodyProps,
  DialogContentProps,
  DialogFooterProps,
  DialogHeaderProps,
  DialogPositionerProps,
  DialogProps,
  DialogRootProps,
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
