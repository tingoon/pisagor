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
    <StepsPrimitive.Root {...rest} className={stepsVariants({ className })} data-testid={testId} />
  );
}

export function StepsList({ className, ...rest }: StepsListProps) {
  return <StepsPrimitive.List {...rest} className={stepsListVariants({ className })} />;
}

export function StepsItem({ className, ...rest }: StepsItemProps) {
  return <StepsPrimitive.Item {...rest} className={stepsItemVariants({ className })} />;
}

export function StepsTrigger({ className, ...rest }: StepsTriggerProps) {
  return <StepsPrimitive.Trigger {...rest} className={stepsTriggerVariants({ className })} />;
}

export function StepsIndicator({ className, children, ...rest }: StepsIndicatorProps) {
  const recipe = stepsIndicatorVariants();

  return (
    <StepsPrimitive.Indicator {...rest} className={recipe.base({ className })}>
      <span className={recipe.label()}>{children}</span>
      <CheckIcon className={recipe.check()} />
    </StepsPrimitive.Indicator>
  );
}

export function StepsSeparator({ className, ...rest }: StepsSeparatorProps) {
  return <StepsPrimitive.Separator {...rest} className={stepsSeparatorVariants({ className })} />;
}

export function StepsTitle({ className, ...rest }: ComponentProps<typeof ark.span>) {
  return (
    <ark.span
      {...rest}
      className={stepsTitleVariants({ className })}
      data-part="title"
      data-scope="steps"
    />
  );
}

export function StepsDescription({ className, ...rest }: ComponentProps<typeof ark.span>) {
  return (
    <ark.span
      {...rest}
      className={stepsDescriptionVariants({ className })}
      data-part="description"
      data-scope="steps"
    />
  );
}

export function StepsContent({ className, ...rest }: StepsContentProps) {
  return <StepsPrimitive.Content {...rest} className={stepsContentVariants({ className })} />;
}

export function StepsCompletedContent({ className, ...rest }: StepsCompletedContentProps) {
  return (
    <StepsPrimitive.CompletedContent
      {...rest}
      className={stepsCompletedContentVariants({ className })}
    />
  );
}

export function StepsPrevious(props: StepsPreviousProps) {
  return <StepsPrimitive.PrevTrigger {...props} />;
}

export function StepsNext(props: StepsNextProps) {
  return <StepsPrimitive.NextTrigger {...props} />;
}
// #endregion

// #region Display Names
StepsRoot.displayName = "Steps";
StepsList.displayName = "Steps.List";
StepsItem.displayName = "Steps.Item";
StepsTrigger.displayName = "Steps.Trigger";
StepsIndicator.displayName = "Steps.Indicator";
StepsSeparator.displayName = "Steps.Separator";
StepsTitle.displayName = "Steps.Title";
StepsDescription.displayName = "Steps.Description";
StepsContent.displayName = "Steps.Content";
StepsCompletedContent.displayName = "Steps.CompletedContent";
StepsPrevious.displayName = "Steps.Previous";
StepsNext.displayName = "Steps.Next";
// #endregion
