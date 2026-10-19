import DrawerShorthand from "./drawer.svelte";
import DrawerBackdrop from "./drawer-backdrop.svelte";
import DrawerBody from "./drawer-body.svelte";
import DrawerCloseTrigger from "./drawer-close-trigger.svelte";
import DrawerContent from "./drawer-content.svelte";
import DrawerContentInner from "./drawer-content-inner.svelte";
import DrawerDescription from "./drawer-description.svelte";
import DrawerFooter from "./drawer-footer.svelte";
import DrawerGrabber from "./drawer-grabber.svelte";
import DrawerGrabberIndicator from "./drawer-grabber-indicator.svelte";
import DrawerHeader from "./drawer-header.svelte";
import DrawerPositioner from "./drawer-positioner.svelte";
import DrawerRoot from "./drawer-root.svelte";
import DrawerTitle from "./drawer-title.svelte";
import DrawerTrigger from "./drawer-trigger.svelte";

export type {
  DrawerBackdropProps,
  DrawerCloseTriggerProps,
  DrawerContentProps,
  DrawerDescriptionProps,
  DrawerGrabberIndicatorProps,
  DrawerGrabberProps,
  DrawerPositionerProps,
  DrawerTitleProps,
  DrawerTriggerProps,
} from "@ark-ui/svelte";

export const Drawer = Object.assign(DrawerShorthand, {
  Backdrop: DrawerBackdrop,
  Body: DrawerBody,
  CloseTrigger: DrawerCloseTrigger,
  Content: DrawerContent,
  ContentInner: DrawerContentInner,
  Description: DrawerDescription,
  Footer: DrawerFooter,
  Grabber: DrawerGrabber,
  GrabberIndicator: DrawerGrabberIndicator,
  Header: DrawerHeader,
  Positioner: DrawerPositioner,
  Root: DrawerRoot,
  Title: DrawerTitle,
  Trigger: DrawerTrigger,
});
