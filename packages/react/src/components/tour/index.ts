import {
  TourActions,
  TourActionTrigger,
  TourBackdrop,
  TourBody,
  TourCloseTrigger,
  TourContent,
  TourDescription,
  TourFooter,
  TourHeader,
  TourNextStep,
  TourPositioner,
  TourPreviousStep,
  TourProgressText,
  TourRoot,
  TourSpotlight,
  TourTitle,
  TourTrigger,
} from "./tour";

export type {
  TourActionTriggerProps,
  TourCloseTriggerProps,
  TourDescriptionProps,
  TourPositionerProps,
  TourProgressTextProps,
  TourSpotlightProps,
  TourTitleProps,
} from "@ark-ui/react/tour";

export type {
  TourContentProps,
  TourProps,
  TourRootProps,
  TourStepType,
  TourTriggerProps,
} from "./tour";

export { useTourContext } from "./tour.context";

export const Tour = Object.assign(TourRoot, {
  Actions: TourActions,
  ActionTrigger: TourActionTrigger,
  Backdrop: TourBackdrop,
  Body: TourBody,
  CloseTrigger: TourCloseTrigger,
  Content: TourContent,
  Description: TourDescription,
  Footer: TourFooter,
  Header: TourHeader,
  NextStep: TourNextStep,
  Positioner: TourPositioner,
  PreviousStep: TourPreviousStep,
  ProgressText: TourProgressText,
  Spotlight: TourSpotlight,
  Title: TourTitle,
  Trigger: TourTrigger,
});
