import { ark } from "@ark-ui/react/factory";
import { Steps as StepsPrimitive } from "@ark-ui/react/steps";
import { CheckIcon } from "@phosphor-icons/react";
import {
  stepsCompletedContentVariants,
  stepsContentVariants,
  stepsDescriptionVariants,
  stepsIndicatorVariants,
  stepsInline2Variants,
  stepsInlineVariants,
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
interface StepsTriggerProps extends ComponentProps<typeof StepsPrimitive.Trigger> {}

interface StepsRootProps extends ComponentProps<typeof StepsPrimitive.Root>, WithTestId {}

// #endregion

// #region Components
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

export function StepsList({ className, ...rest }: ComponentProps<typeof StepsPrimitive.List>) {
  return <StepsPrimitive.List {...rest} className={cn(stepsListVariants(), className)} />;
}
StepsList.displayName = "Steps.List";

export function StepsItem({ className, ...rest }: ComponentProps<typeof StepsPrimitive.Item>) {
  return <StepsPrimitive.Item {...rest} className={cn(stepsItemVariants(), className)} />;
}
StepsItem.displayName = "Steps.Item";

export function StepsTrigger({ className, ...rest }: StepsTriggerProps) {
  return <StepsPrimitive.Trigger {...rest} className={cn(stepsTriggerVariants(), className)} />;
}
StepsTrigger.displayName = "Steps.Trigger";

export function StepsIndicator({
  className,
  children,
  ...rest
}: ComponentProps<typeof StepsPrimitive.Indicator>) {
  return (
    <StepsPrimitive.Indicator {...rest} className={cn(stepsIndicatorVariants(), className)}>
      <span className={stepsInlineVariants()}>{children}</span>
      <CheckIcon className={stepsInline2Variants()} />
    </StepsPrimitive.Indicator>
  );
}
StepsIndicator.displayName = "Steps.Indicator";

export function StepsSeparator({
  className,
  ...rest
}: ComponentProps<typeof StepsPrimitive.Separator>) {
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

export function StepsContent({
  className,
  ...rest
}: ComponentProps<typeof StepsPrimitive.Content>) {
  return <StepsPrimitive.Content {...rest} className={cn(stepsContentVariants(), className)} />;
}
StepsContent.displayName = "Steps.Content";

export function StepsCompletedContent({
  className,
  ...rest
}: ComponentProps<typeof StepsPrimitive.CompletedContent>) {
  return (
    <StepsPrimitive.CompletedContent
      {...rest}
      className={cn(stepsCompletedContentVariants(), className)}
    />
  );
}
StepsCompletedContent.displayName = "Steps.CompletedContent";

export function StepsPrevious(props: ComponentProps<typeof StepsPrimitive.PrevTrigger>) {
  return <StepsPrimitive.PrevTrigger {...props} />;
}
StepsPrevious.displayName = "Steps.Previous";

export function StepsNext(props: ComponentProps<typeof StepsPrimitive.NextTrigger>) {
  return <StepsPrimitive.NextTrigger {...props} />;
}
StepsNext.displayName = "Steps.Next";
// #endregion
