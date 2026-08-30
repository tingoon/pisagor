import {
  PopoverAnchor,
  PopoverArrow,
  PopoverBody,
  PopoverCloseTrigger,
  PopoverContent,
  PopoverDescription,
  PopoverFooter,
  PopoverHeader,
  PopoverPositioner,
  PopoverRoot,
  PopoverTitle,
  PopoverTrigger,
} from "./popover";

export type {
  PopoverAnchorProps,
  PopoverArrowProps,
  PopoverCloseTriggerProps,
  PopoverDescriptionProps,
  PopoverPositionerProps,
  PopoverRootProps,
  PopoverTitleProps,
  PopoverTriggerProps,
} from "@ark-ui/react/popover";

export type {
  PopoverBodyProps,
  PopoverContentProps,
  PopoverFooterProps,
  PopoverHeaderProps,
} from "./popover";

export const Popover = Object.assign(PopoverRoot, {
  Anchor: PopoverAnchor,
  Arrow: PopoverArrow,
  Body: PopoverBody,
  CloseTrigger: PopoverCloseTrigger,
  Content: PopoverContent,
  Description: PopoverDescription,
  Footer: PopoverFooter,
  Header: PopoverHeader,
  Positioner: PopoverPositioner,
  Title: PopoverTitle,
  Trigger: PopoverTrigger,
});
