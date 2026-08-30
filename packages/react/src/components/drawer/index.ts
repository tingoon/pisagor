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
  DrawerCloseTriggerProps,
  DrawerGrabberProps,
  DrawerRootProps,
  DrawerTitleProps,
  DrawerTriggerProps,
} from "@ark-ui/react/drawer";

export type {
  DrawerBodyProps,
  DrawerContentInnerProps,
  DrawerContentProps,
  DrawerDescriptionProps,
  DrawerFooterProps,
  DrawerHeaderProps,
  DrawerPositionerProps,
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
