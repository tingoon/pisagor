import {
  DrawerBody,
  DrawerClose,
  DrawerContent,
  DrawerContentInner,
  DrawerDescription,
  DrawerFooter,
  DrawerGrabber,
  DrawerHeader,
  DrawerOverlay,
  DrawerPositioner,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
} from "./drawer";

export type {
  DrawerBodyProps,
  DrawerCloseProps,
  DrawerContentProps,
  DrawerGrabberProps,
  DrawerHeaderProps,
  DrawerOverlayProps,
  DrawerPositionerProps,
  DrawerRootProps,
  DrawerTitleProps,
  DrawerTriggerProps,
} from "./drawer";

export const Drawer = Object.assign(DrawerRoot, {
  Body: DrawerBody,
  Close: DrawerClose,
  Content: DrawerContent,
  ContentInner: DrawerContentInner,
  Description: DrawerDescription,
  Footer: DrawerFooter,
  Grabber: DrawerGrabber,
  Header: DrawerHeader,
  Overlay: DrawerOverlay,
  Positioner: DrawerPositioner,
  Title: DrawerTitle,
  Trigger: DrawerTrigger,
});
