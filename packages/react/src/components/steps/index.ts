import {
  StepsCompletedContent,
  StepsContent,
  StepsDescription,
  StepsIndicator,
  StepsItem,
  StepsList,
  StepsNextTrigger,
  StepsPrevTrigger,
  StepsRoot,
  StepsSeparator,
  StepsTitle,
  StepsTrigger,
} from "./steps";

export type {
  StepsCompletedContentProps,
  StepsContentProps,
  StepsIndicatorProps,
  StepsItemProps,
  StepsListProps,
  StepsNextTriggerProps,
  StepsPrevTriggerProps,
  StepsRootProps,
  StepsSeparatorProps,
  StepsTriggerProps,
} from "@ark-ui/react/steps";

export type { StepsDescriptionProps, StepsTitleProps } from "./steps";

export const Steps = Object.assign(StepsRoot, {
  CompletedContent: StepsCompletedContent,
  Content: StepsContent,
  Description: StepsDescription,
  Indicator: StepsIndicator,
  Item: StepsItem,
  List: StepsList,
  NextTrigger: StepsNextTrigger,
  PrevTrigger: StepsPrevTrigger,
  Separator: StepsSeparator,
  Title: StepsTitle,
  Trigger: StepsTrigger,
});
