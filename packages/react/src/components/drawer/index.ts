import {
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerContentInner,
  DrawerDescription,
  DrawerFooter,
  DrawerGrabber,
  DrawerHeader,
  DrawerPositioner,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
} from "./drawer";

export type {
  DrawerBackdropProps,
  DrawerBodyProps,
  DrawerCloseTriggerProps,
  DrawerContentProps,
  DrawerGrabberProps,
  DrawerHeaderProps,
  DrawerPositionerProps,
  DrawerRootProps,
  DrawerTitleProps,
  DrawerTriggerProps,
} from "./drawer";

export const Drawer = Object.assign(DrawerRoot, {
  Backdrop: DrawerBackdrop,
  Body: DrawerBody,
  CloseTrigger: DrawerCloseTrigger,
  Content: DrawerContent,
  ContentInner: DrawerContentInner,
  Description: DrawerDescription,
  Footer: DrawerFooter,
  Grabber: DrawerGrabber,
  Header: DrawerHeader,
  Positioner: DrawerPositioner,
  Title: DrawerTitle,
  Trigger: DrawerTrigger,
});
