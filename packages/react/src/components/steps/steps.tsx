import { ark } from "@ark-ui/react/factory";
import { Steps as StepsPrimitive } from "@ark-ui/react/steps";
import { CheckIcon } from "@phosphor-icons/react";
import {
  stepsCompletedContentVariants,
  stepsContentVariants,
  stepsDescriptionVariants,
  stepsIndicatorVariants,
  stepsItemVariants,
  stepsListVariants,
  stepsSeparatorVariants,
  stepsTitleVariants,
  stepsTriggerVariants,
  stepsVariants,
} from "@pisagor/styles/ui/steps";
import { cn } from "@pisagor/utils";
import type { ComponentProps } from "react";
import type { WithTestId } from "../../internal/types";

// #region Types
export type StepsTriggerProps = ComponentProps<typeof StepsPrimitive.Trigger>;

export type StepsRootProps = ComponentProps<typeof StepsPrimitive.Root> & WithTestId;

export type StepsListProps = ComponentProps<typeof StepsPrimitive.List>;

export type StepsItemProps = ComponentProps<typeof StepsPrimitive.Item>;

export type StepsIndicatorProps = ComponentProps<typeof StepsPrimitive.Indicator>;

export type StepsSeparatorProps = ComponentProps<typeof StepsPrimitive.Separator>;

export type StepsContentProps = ComponentProps<typeof StepsPrimitive.Content>;

export type StepsCompletedContentProps = ComponentProps<typeof StepsPrimitive.CompletedContent>;

export type StepsPreviousProps = ComponentProps<typeof StepsPrimitive.PrevTrigger>;

export type StepsNextProps = ComponentProps<typeof StepsPrimitive.NextTrigger>;
// #endregion

// #region Parts
export function StepsRoot({ className, testId, ...rest }: StepsRootProps) {
  return (
    <StepsPrimitive.Root
      {...rest}
      className={cn(stepsVariants(), className)}
      data-testid={testId}
    />
  );
}
StepsRoot.displayName = "Steps";

export function StepsList({ className, ...rest }: StepsListProps) {
  return <StepsPrimitive.List {...rest} className={cn(stepsListVariants(), className)} />;
}
StepsList.displayName = "Steps.List";

export function StepsItem({ className, ...rest }: StepsItemProps) {
  return <StepsPrimitive.Item {...rest} className={cn(stepsItemVariants(), className)} />;
}
StepsItem.displayName = "Steps.Item";

export function StepsTrigger({ className, ...rest }: StepsTriggerProps) {
  return <StepsPrimitive.Trigger {...rest} className={cn(stepsTriggerVariants(), className)} />;
}
StepsTrigger.displayName = "Steps.Trigger";

export function StepsIndicator({ className, children, ...rest }: StepsIndicatorProps) {
  const recipe = stepsIndicatorVariants();

  return (
    <StepsPrimitive.Indicator {...rest} className={recipe.base({ className })}>
      <span className={recipe.label()}>{children}</span>
      <CheckIcon className={recipe.check()} />
    </StepsPrimitive.Indicator>
  );
}
StepsIndicator.displayName = "Steps.Indicator";

export function StepsSeparator({ className, ...rest }: StepsSeparatorProps) {
  return <StepsPrimitive.Separator {...rest} className={cn(stepsSeparatorVariants(), className)} />;
}
StepsSeparator.displayName = "Steps.Separator";

export function StepsTitle({ className, ...rest }: ComponentProps<typeof ark.span>) {
  return (
    <ark.span
      {...rest}
      className={cn(stepsTitleVariants(), className)}
      data-part="title"
      data-scope="steps"
    />
  );
}
StepsTitle.displayName = "Steps.Title";

export function StepsDescription({ className, ...rest }: ComponentProps<typeof ark.span>) {
  return (
    <ark.span
      {...rest}
      className={cn(stepsDescriptionVariants(), className)}
      data-part="description"
      data-scope="steps"
    />
  );
}
StepsDescription.displayName = "Steps.Description";

export function StepsContent({ className, ...rest }: StepsContentProps) {
  return <StepsPrimitive.Content {...rest} className={cn(stepsContentVariants(), className)} />;
}
StepsContent.displayName = "Steps.Content";

export function StepsCompletedContent({ className, ...rest }: StepsCompletedContentProps) {
  return (
    <StepsPrimitive.CompletedContent
      {...rest}
      className={cn(stepsCompletedContentVariants(), className)}
    />
  );
}
StepsCompletedContent.displayName = "Steps.CompletedContent";

export function StepsPrevious(props: StepsPreviousProps) {
  return <StepsPrimitive.PrevTrigger {...props} />;
}
StepsPrevious.displayName = "Steps.Previous";

export function StepsNext(props: StepsNextProps) {
  return <StepsPrimitive.NextTrigger {...props} />;
}
StepsNext.displayName = "Steps.Next";
// #endregion
