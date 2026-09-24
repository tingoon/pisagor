import StepsCompletedContent from "./steps-completed-content.svelte";
import StepsContent from "./steps-content.svelte";
import StepsDescription from "./steps-description.svelte";
import StepsIndicator from "./steps-indicator.svelte";
import StepsItem from "./steps-item.svelte";
import StepsList from "./steps-list.svelte";
import StepsNextTrigger from "./steps-next-trigger.svelte";
import StepsPrevTrigger from "./steps-prev-trigger.svelte";
import StepsRoot from "./steps-root.svelte";
import StepsSeparator from "./steps-separator.svelte";
import StepsTitle from "./steps-title.svelte";
import StepsTrigger from "./steps-trigger.svelte";

export const Steps = Object.assign(StepsRoot, {
  CompletedContent: StepsCompletedContent,
  Content: StepsContent,
  Description: StepsDescription,
  Indicator: StepsIndicator,
  Item: StepsItem,
  List: StepsList,
  NextTrigger: StepsNextTrigger,
  PrevTrigger: StepsPrevTrigger,
  Root: StepsRoot,
  Separator: StepsSeparator,
  Title: StepsTitle,
  Trigger: StepsTrigger,
});
