import { useTourContext } from "./tour.context";
import TourActionTrigger from "./tour-action-trigger.svelte";
import TourActions from "./tour-actions.svelte";
import TourBackdrop from "./tour-backdrop.svelte";
import TourBody from "./tour-body.svelte";
import TourCloseTrigger from "./tour-close-trigger.svelte";
import TourContent from "./tour-content.svelte";
import TourDescription from "./tour-description.svelte";
import TourFooter from "./tour-footer.svelte";
import TourHeader from "./tour-header.svelte";
import TourNextStep from "./tour-next-step.svelte";
import TourPositioner from "./tour-positioner.svelte";
import TourPreviousStep from "./tour-previous-step.svelte";
import TourProgressText from "./tour-progress-text.svelte";
import TourRoot from "./tour-root.svelte";
import TourSpotlight from "./tour-spotlight.svelte";
import TourTitle from "./tour-title.svelte";
import TourTrigger from "./tour-trigger.svelte";

export type { TourStepDetails } from "@ark-ui/svelte/tour";
export { useTourContext };

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
