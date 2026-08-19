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

export type {
  DialogBodyProps,
  DialogContentProps,
  DialogHeaderProps,
  DialogProps,
} from "./dialog";
export {
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
  useDialog,
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
