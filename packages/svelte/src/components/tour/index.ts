import { Tour as TourPrimitive } from "@ark-ui/svelte";
import TourShorthand from "./tour.svelte";
import TourActionTrigger from "./tour-action-trigger.svelte";
import TourArrow from "./tour-arrow.svelte";
import TourArrowTip from "./tour-arrow-tip.svelte";
import TourBackdrop from "./tour-backdrop.svelte";
import TourBody from "./tour-body.svelte";
import TourCloseTrigger from "./tour-close-trigger.svelte";
import TourContent from "./tour-content.svelte";
import TourControl from "./tour-control.svelte";
import TourDescription from "./tour-description.svelte";
import TourHeader from "./tour-header.svelte";
import TourPositioner from "./tour-positioner.svelte";
import TourProgressText from "./tour-progress-text.svelte";
import TourRoot from "./tour-root.svelte";
import TourSpotlight from "./tour-spotlight.svelte";
import TourTitle from "./tour-title.svelte";

export type {
  TourActionTriggerProps,
  TourArrowProps,
  TourArrowTipProps,
  TourBackdropProps,
  TourCloseTriggerProps,
  TourContentProps,
  TourControlProps,
  TourDescriptionProps,
  TourPositionerProps,
  TourProgressTextProps,
  TourSpotlightProps,
  TourStepDetails,
  TourTitleProps,
  UseTourProps,
  UseTourReturn,
} from "@ark-ui/svelte";
export { useTour, useTourContext } from "@ark-ui/svelte";

export const Tour = Object.assign(TourShorthand, {
  ActionTrigger: TourActionTrigger,
  Actions: TourPrimitive.Actions,
  Arrow: TourArrow,
  ArrowTip: TourArrowTip,
  Backdrop: TourBackdrop,
  Body: TourBody,
  CloseTrigger: TourCloseTrigger,
  Content: TourContent,
  Control: TourControl,
  Description: TourDescription,
  Header: TourHeader,
  Positioner: TourPositioner,
  ProgressText: TourProgressText,
  Root: TourRoot,
  Spotlight: TourSpotlight,
  Title: TourTitle,
});
