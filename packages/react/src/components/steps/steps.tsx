import { ark } from "@ark-ui/react/factory";
import type {
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
import { Steps as StepsPrimitive } from "@ark-ui/react/steps";
import { CheckIcon } from "@phosphor-icons/react";
import { stepsItemRecipe, stepsRecipe } from "@pisagor/recipes/steps";
import type { ComponentProps } from "react";
import { StepsContext, StepsItemContext, useSteps, useStepsItem } from "./steps.context";

// #region Types
export type StepsTitleProps = ComponentProps<typeof ark.span>;

export type StepsDescriptionProps = ComponentProps<typeof ark.span>;
// #endregion

// #region Parts
export function StepsRoot({ children, className, ...rest }: StepsRootProps) {
  const slots = stepsRecipe();

  return (
    <StepsContext value={{ slots }}>
      <StepsPrimitive.Root {...rest} className={slots.base({ className })}>
        {children}
      </StepsPrimitive.Root>
    </StepsContext>
  );
}

export function StepsList({ className, ...rest }: StepsListProps) {
  const { slots } = useSteps();

  return <StepsPrimitive.List {...rest} className={slots.list({ className })} />;
}

export function StepsItem({ children, className, ...rest }: StepsItemProps) {
  const slots = stepsItemRecipe();

  return (
    <StepsItemContext value={{ slots }}>
      <StepsPrimitive.Item {...rest} className={slots.base({ className })}>
        {children}
      </StepsPrimitive.Item>
    </StepsItemContext>
  );
}

export function StepsTrigger({ className, ...rest }: StepsTriggerProps) {
  const { slots } = useStepsItem();

  return <StepsPrimitive.Trigger {...rest} className={slots.trigger({ className })} />;
}

export function StepsIndicator({ children, className, ...rest }: StepsIndicatorProps) {
  const { slots } = useStepsItem();

  return (
    <StepsPrimitive.Indicator {...rest} className={slots.indicator({ className })}>
      <span className={slots.label()}>{children}</span>
      <CheckIcon className={slots.check()} />
    </StepsPrimitive.Indicator>
  );
}

export function StepsSeparator({ className, ...rest }: StepsSeparatorProps) {
  const { slots } = useStepsItem();

  return <StepsPrimitive.Separator {...rest} className={slots.separator({ className })} />;
}

export function StepsTitle({ className, ...rest }: StepsTitleProps) {
  const { slots } = useStepsItem();

  return (
    <ark.span
      {...rest}
      className={slots.title({ className })}
      data-part="title"
      data-scope="steps"
    />
  );
}

export function StepsDescription({ className, ...rest }: StepsDescriptionProps) {
  const { slots } = useStepsItem();

  return (
    <ark.span
      {...rest}
      className={slots.description({ className })}
      data-part="description"
      data-scope="steps"
    />
  );
}

export function StepsContent({ className, ...rest }: StepsContentProps) {
  const { slots } = useSteps();

  return <StepsPrimitive.Content {...rest} className={slots.content({ className })} />;
}

export function StepsCompletedContent({ className, ...rest }: StepsCompletedContentProps) {
  const { slots } = useSteps();

  return (
    <StepsPrimitive.CompletedContent {...rest} className={slots.completedContent({ className })} />
  );
}

export function StepsPrevTrigger(props: StepsPrevTriggerProps) {
  return <StepsPrimitive.PrevTrigger {...props} />;
}

export function StepsNextTrigger(props: StepsNextTriggerProps) {
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
StepsPrevTrigger.displayName = "Steps.PrevTrigger";
StepsNextTrigger.displayName = "Steps.NextTrigger";
// #endregion
